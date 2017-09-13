/****************************
 * Inner request '500 server error'. Calls by a router every time the server throws an error.
 *
 * @author GlaDos
 * @since 13.09.17
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
	TEXT_PLAIN               = constants.TEXT_PLAIN,
	STATUS_CODE_SERVER_ERROR = constants.STATUS_CODE_INTERNAL_SERVER_ERROR,
	BODY                     = "500 Internal server error";

/**
 * The request itself. Returns 404 error response.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const notFound = (response, params) => {
	response(STATUS_CODE_SERVER_ERROR, TEXT_PLAIN, BODY);
};

/**
 * Exports.
 */
exports = module.exports = notFound;