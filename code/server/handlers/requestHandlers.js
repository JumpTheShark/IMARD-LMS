/****************************
 * Module, which defines all the requests.
 *
 * @author GlaDos
 * @since 09.11.16
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	start            = require("./start"),
	notFound         = require("./notFound"),
	getTree          = require("./getTree"),
	submitModule     = require("./submitModule").submitModule,
	submitModulePost = require("./submitModulePost"),
	serverError      = require("./serverError");

/**
 * Exports.
 */
exports = module.exports = {
	start            : start,
	notFound         : notFound,
	getTree          : getTree,
	submitModule     : submitModule,
	submitModulePost : submitModulePost,
	serverError      : serverError
};