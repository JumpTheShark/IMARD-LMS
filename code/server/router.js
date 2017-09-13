/****************************
 * Router for managing the requests. Calls handlers corresponding to the url.
 *
 * @author GlaDos
 * @since 18.08.17
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	constants = require("../global/constants"),
	log       = require("../../self_modules/logger/logger").log;

/***
 * Constants.
 */
const
	NOT_FOUND_PATH    = constants.NOT_FOUND_PATH,
	SERVER_ERROR_PATH = constants.SERVER_ERROR_PATH;

/**
 * The routing function itself. Handles the requests.
 *
 * @param {dictionary} handle handlers
 * @param {string} method verb (GET, POST, etc.)
 * @param {string} pathName url path
 * @param {function(int, string, string)} inject response function
 * @param {dictionary} params url parameters
 * @param {dictionary} postData post data in parsed JSON form
 * @return {null} nothing
 */
const route = (handle, method, pathName, inject, params, postData) => {
	let handleRequest = null;

	try {
		switch (method) {
		case "GET":
			handleRequest = handle.get[pathName];

			if (handleRequest === undefined)
				handle.get[NOT_FOUND_PATH](inject);
			else
				handleRequest(inject, params);

			break;
		case "POST":
			handleRequest = handle.post[pathName];

			if (handleRequest === undefined)
				handle.get[NOT_FOUND_PATH](inject);
			else
				handleRequest(inject, postData, params);

			break;
		case "PUT":
			handleRequest = handle.put[pathName];

			if (handleRequest === undefined)
				handle.get[NOT_FOUND_PATH](inject);
			else
				handleRequest(inject, postData, params);

			break;
		default:
			handle.get[NOT_FOUND_PATH](inject); /* unknown method => every page with this method can not be found */
		}
	} catch (error) {
		log(`Internal server error: ${error}`);
		handle.get[SERVER_ERROR_PATH](inject);
	}
};

/**
 * Exports.
 */
exports = module.exports = { route : route };