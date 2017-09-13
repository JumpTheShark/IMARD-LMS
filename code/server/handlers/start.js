/****************************
 * Request 'start' [GET]. For now this is a plug request for entering the repository link.
 *
 * @author GlaDos
 * @since 09.11.16
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
	TEXT_HTML      = constants.TEXT_HTML,
	STATUS_CODE_OK = constants.STATUS_CODE_OK,
	BODY           =
		"<html>" +
		"<head>" +
		"<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />" +
		"</head>" +
		"<body>" +
		"<form action=\"/submit-module-post\" method=\"post\">" +
		"Subject:<br>" +
		"<input type=\"text\" name=\"subject\" value=\"subject\"><br>" +
		"Text:<br>" +
		"<input type=\"text\" name=\"text\" value=\"text\"><br>" +
		"<input type=\"submit\" value=\"Submit\">" +
		"</form>`" +
		"</body>" +
		"</html>";

/**
 * The request itself. Loads starting page.
 * Also contains a text field and a button to submit something to TODO.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const start = (response, params) => {
	response(STATUS_CODE_OK, TEXT_HTML, BODY);
};

/**
 * Exports.
 */
exports = module.exports = start;