/****************************
 * Request 'get tree' [GET]. Returns a module dependency tree in JSON form.
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
	nodeStorage = require("../../storage/nodeStorage");

/***
 * Constants.
 */
const
	TEXT_PLAIN               = constants.TEXT_PLAIN,
	STATUS_CODE_OK           = constants.STATUS_CODE_OK,
	STATUS_CODE_BAD_REQUEST  = constants.STATUS_CODE_BAD_REQUEST,
	URL_PARAM_MODULE_SUBJECT = "subject";

/**
 * The request itself. Returns a node tree packed in JSON.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const getTree = (response, params) => {
	const moduleSubject = params[URL_PARAM_MODULE_SUBJECT];

	if (nodeStorage.containsNode(moduleSubject))
		response(STATUS_CODE_OK, TEXT_PLAIN, nodeStorage.getTree(params[URL_PARAM_MODULE_SUBJECT]).extractJSON());
	else
		response(STATUS_CODE_BAD_REQUEST, TEXT_PLAIN, `No module with subject "${moduleSubject}" found`);
};

/**
 * Exports.
 */
exports = module.exports = getTree;