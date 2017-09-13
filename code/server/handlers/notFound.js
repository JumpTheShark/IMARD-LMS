/****************************
 * Inner request '404 not found'. Calls by a router every time the server can not find the given url.
 *
 * @author GlaDos
 * @since 06.09.17
 ****************************/

"use strict";

/***
 * Imports.
 */
const constants = require("../../global/constants");

/***
 * Constants.
 */
const
	TEXT_PLAIN            = constants.TEXT_PLAIN,
	STATUS_CODE_NOT_FOUND = constants.STATUS_CODE_NOT_FOUND,
	BODY                  = "404 Not found";

/**
 * The request itself. Returns 404 error response.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const notFound = (response, params) => {
	response(STATUS_CODE_NOT_FOUND, TEXT_PLAIN, BODY);
};

/**
 * Exports.
 */
exports = module.exports = notFound;