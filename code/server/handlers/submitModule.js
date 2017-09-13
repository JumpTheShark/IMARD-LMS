/****************************
 * Request 'submit module' [PUT]. Registers a new module in the module database.
 *
 * @author GlaDos
 * @since 09.09.17
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	constants   = require("../../global/constants"),
	Node        = require("../../structures/Node"),
	nodeStorage = require("../../storage/nodeStorage");

/***
 * Constants.
 */
const
	TEXT_PLAIN             = constants.TEXT_PLAIN,
	STATUS_CODE_OK         = constants.STATUS_CODE_OK,
	STATUS_CODE_BAD_ENTITY = constants.STATUS_CODE_UNPROCESSABLE_ENTITY,
	BODY_KEY_SUBJECT       = "subject",
	BODY_KEY_TEXT          = "text",
	BODY_KEY_DEPENDS_ON    = "dependsOn";

/**
 * The request itself. Returns a node tree packed in JSON.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} postData request body in string form
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const submitModule = (response, postData, params) => {
	submitModuleJSON(response, JSON.parse(postData), params);
};

/**
 * The request itself. Returns a node tree packed in JSON.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} json request body in parsed JSON form
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const submitModuleJSON = (response, json, params) => {
	const
		subject   = json[BODY_KEY_SUBJECT],
		text      = json[BODY_KEY_TEXT],
		dependsOn = json[BODY_KEY_DEPENDS_ON];

	//** checking subject

	if (typeof subject !== "string") {
		response(STATUS_CODE_BAD_ENTITY, TEXT_PLAIN, `no (correct) ${BODY_KEY_SUBJECT} attribute defined`);
		return;
	}

	//** checking text

	if (typeof text !== "string") {
		response(STATUS_CODE_BAD_ENTITY, TEXT_PLAIN, `no (correct) ${BODY_KEY_TEXT} attribute defined`);
		return;
	}

	//** checking dependencies

	if (dependsOn === undefined || dependsOn.length === undefined) {
		response(STATUS_CODE_BAD_ENTITY, TEXT_PLAIN, `no (correct) ${BODY_KEY_DEPENDS_ON} attribute defined`);
		return;
	}

	for (let i = 0; i < dependsOn.length; i += 1)
		if (typeof dependsOn[i] !== "string") {
			response(STATUS_CODE_BAD_ENTITY, TEXT_PLAIN, `bad ${BODY_KEY_DEPENDS_ON} array element with index ${i}`);
			return;
		}

	//**

	nodeStorage.putNode(new Node(subject, text, dependsOn));
	response(STATUS_CODE_OK, TEXT_PLAIN, "The module has been successfully submitted.");
};

/**
 * Exports.
 */
exports = module.exports = {
	BODY_KEY_SUBJECT    : BODY_KEY_SUBJECT,
	BODY_KEY_TEXT       : BODY_KEY_TEXT,
	BODY_KEY_DEPENDS_ON : BODY_KEY_DEPENDS_ON,
	submitModule        : submitModule,
	submitModuleJSON    : submitModuleJSON
};