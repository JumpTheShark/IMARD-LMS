/****************************
 * The entry point of the program.
 * Runs the server.
 *
 * @author GlaDos
 * @since 09.11.16
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	config          = require("./global/configurations").ACTIVE,
	server          = require("./server/server"),
	router          = require("./server/router"),
	requestHandlers = require("./server/handlers/requestHandlers"),
	constants       = require("./global/constants"),
	logger          = require("../self_modules/logger/logger");

/**
 * Constants.
 */
const
	URL_NOT_FOUND          = constants.NOT_FOUND_PATH,
	URL_SERVER_ERROR       = constants.SERVER_ERROR_PATH,
	URL_ROOT               = "/",
	URL_GET_TREE           = "/get-tree",
	URL_SUBMIT_MODULE      = "/submit-module",
	URL_SUBMIT_MODULE_POST = "/submit-module-post";

/**
 * Handle object for handling requests. Contains a list of request types,
 * and for each type a list of binded request handlers.
 * Initially empty.
 *
 * @type {{get: {}, post: {}, put: {}}}
 */
const handle = {
	get  :  {},
	post :  {},
	put  :  {}
};

/**
 * Request handlers' initialization.
 */
handle.get[URL_ROOT]                = requestHandlers.start;
handle.get[URL_NOT_FOUND]           = requestHandlers.notFound;
handle.get[URL_SERVER_ERROR]        = requestHandlers.serverError;
handle.get[URL_GET_TREE]            = requestHandlers.getTree;
handle.post[URL_SUBMIT_MODULE_POST] = requestHandlers.submitModulePost;
handle.put[URL_SUBMIT_MODULE]       = requestHandlers.submitModule;

/**
 * Configure logger.
 */
logger.configuration = config.getLoggerConfiguration();

/**
 * Starts the server.
 */
server.generate(router.route, handle).listen(config.getPort());

/***
 * Exports.
 */
exports = module.exports = {};