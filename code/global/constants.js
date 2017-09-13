/****************************
 * All global constants.
 *
 * @author GlaDos
 * @since 09.11.16
 ****************************/

"use strict";

/***
 * Constants.
 */
const
	CONTENT_TYPE                      = "Content-Type",
	TEXT_PLAIN                        = "text/plain",
	TEXT_HTML                         = "text/html",
	CONTENT_TYPE_TEXT_PLAIN           = {},
	CONTENT_TYPE_TEXT_HTML            = {},
	STATUS_CODE_OK                    = 200,
	STATUS_CODE_BAD_REQUEST           = 400,
	STATUS_CODE_UNPROCESSABLE_ENTITY  = 422,
	STATUS_CODE_INTERNAL_SERVER_ERROR = 500,
	STATUS_CODE_NOT_FOUND             = 404,
	TEST_PORT                         = 8889,
	DEFAULT_ENABLE_LOGS               = true,
	DEFAULT_PORT                      = 8888,
	NOT_FOUND_PATH                    = "/not_found",
	SERVER_ERROR_PATH                 = "/server-error";

CONTENT_TYPE_TEXT_PLAIN[CONTENT_TYPE] = TEXT_PLAIN;
CONTENT_TYPE_TEXT_HTML[CONTENT_TYPE]  = TEXT_HTML;

/***
 * Exports.
 */
exports = module.exports = {
	CONTENT_TYPE                      : CONTENT_TYPE,
	TEXT_PLAIN                        : TEXT_PLAIN,
	TEXT_HTML                         : TEXT_HTML,
	CONTENT_TYPE_TEXT_PLAIN           : CONTENT_TYPE_TEXT_PLAIN,
	CONTENT_TYPE_TEXT_HTML            : CONTENT_TYPE_TEXT_HTML,
	STATUS_CODE_OK                    : STATUS_CODE_OK,
	STATUS_CODE_BAD_REQUEST           : STATUS_CODE_BAD_REQUEST,
	STATUS_CODE_UNPROCESSABLE_ENTITY  : STATUS_CODE_UNPROCESSABLE_ENTITY,
	STATUS_CODE_INTERNAL_SERVER_ERROR : STATUS_CODE_INTERNAL_SERVER_ERROR,
	STATUS_CODE_NOT_FOUND             : STATUS_CODE_NOT_FOUND,
	TEST_PORT                         : TEST_PORT,
	DEFAULT_ENABLE_LOGS               : DEFAULT_ENABLE_LOGS,
	DEFAULT_PORT                      : DEFAULT_PORT,
	NOT_FOUND_PATH                    : NOT_FOUND_PATH,
	SERVER_ERROR_PATH                 : SERVER_ERROR_PATH
};