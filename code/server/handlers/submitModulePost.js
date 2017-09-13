/****************************
 * Request 'submit module' [POST]. Calls 'submit-module' [PUT] with formed JSON object.
 * Used by a html page form submit, thanks for having only GET and POST methods.
 *
 * @author GlaDos
 * @since 13.09.17
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	submitModule = require("./submitModule"),
	qs           = require("qs");

/**
 * The request itself. Returns a node tree packed in JSON.
 *
 * @param {function(int, string, string)} response reply inject function to put request answer in
 * @param {dictionary} postData request body in parsed JSON form
 * @param {dictionary} params url parameters
 * @return {null} nothing
 */
const submitModulePost = (response, postData, params) => {
	submitModule.submitModuleJSON(
		response,
		qs.parse(postData + "&dependsOn=[]"),
		params
	);
};

/**
 * Exports.
 */
exports = module.exports = submitModulePost;