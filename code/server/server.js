/****************************
 * Server core. Creates and activates a request listener with all needed instruments.
 *
 * @author GlaDos
 * @since 09.11.16
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	InnerResponse = require("./tools/InnerResponse"),
	constants     = require("../global/constants"),
	config        = require("../global/configurations").ACTIVE,
	log           = require("../../self_modules/logger/logger").log,
	express       = require("express"),
	url           = require("url"),
	qs            = require("qs");

/***
 * Constants.
 */
const
	ENCODING          = "utf8",
	DATA_LISTENER_STR = "data",
	END_LISTENER_STR  = "end",
	STRING            = "string",
	STATUS_CODE_BAD   = constants.STATUS_CODE_BAD_REQUEST,
	TEXT_PLAIN        = constants.TEXT_PLAIN,
	SERVER_ERROR_PATH = constants.SERVER_ERROR_PATH;

/**
 * Inject response generator. Generates an inject response function.
 *
 * @param {object} response server response to bind
 * @return {function(int, string, string)} inject response function
 */
const injectResponseGenerator = (response) => {

	/**
	 * Response injector. Takes data to put it to the server response.
	 * It is possible to shorten the response in case of error 400 with plain text:
	 * give the string value to the statusCode as the error message.
	 *
	 * @param {int} statusCode response status code
	 * @param {string} contentType response content type
	 * @param {string} body response body (null if is absent)
	 * @return {void} nothing
	 */
	const injectResponse = (statusCode, contentType, body) => {
		if (typeof statusCode === STRING)
			new InnerResponse(STATUS_CODE_BAD, TEXT_PLAIN, statusCode).inject(response);
		else
			new InnerResponse(statusCode, contentType, body).inject(response);
	};

	return injectResponse;
};

/**
 * Server generator.
 * Generates server with a function (request, response) by the given route function and request handlers.
 *
 * @param {function} route router function to parse the url
 * @param {object} handle object with request handlers
 * @return {function(object, object)} server function
 */
const generate = (route, handle) => {
	const app = express();

	/**
	 * Handles the given request and puts the reply to the given response.
	 *
	 * @param {object} request server request
	 * @param {object} response server response
	 * @return {void} nothing
	 */
	const processor = (request, response) => {
		let postData = "";

		request.setEncoding(ENCODING);

		const
			method   = request.method,
			parsed   = url.parse(request.url),
			pathname = parsed.pathname,
			params   = qs.parse(parsed.query),
			inject   = injectResponseGenerator(response);

		request.addListener(DATA_LISTENER_STR, (postDataChunk) => {
			postData += postDataChunk;
			log(`Received POST data chunk '${postDataChunk}'.`);
		});

		request.addListener(END_LISTENER_STR, () => {
			try {
				route(handle, method, pathname, inject, params, postData);
			} catch (error) {
				handle.get[SERVER_ERROR_PATH](inject);
			}
		});
	};

	for (const handler in handle.get)
		app.get(handler, processor);

	for (const handler in handle.post)
		app.post(handler, processor);

	for (const handler in handle.put)
		app.put(handler, processor);

	app.get("*", processor);

	return app;
};

/***
 * Exports.
 */
exports = module.exports = {
	injectResponseGenerator : injectResponseGenerator,
	generate                : generate,
	PORT                    : config.getPort() /*$test$*/
};