/****************************
 * All global configurations.
 *
 * @author GlaDos
 * @since 09.11.16
 ****************************/

"use strict";

/***
 * Imports.
 */
const
	GlobalConfig = require("./GlobalConfiguration"),
	constants    = require("./constants");

/**
 * Default configuration.
 *
 * @type {GlobalConfiguration}
 */
const DEFAULT = new GlobalConfig(
	constants.DEFAULT_ENABLE_LOGS,
	constants.DEFAULT_PORT
);

/**
 * Active configuration that will be used in code.
 * Not included in configs array as it only links to the existing one configuration.
 *
 * @type {GlobalConfiguration}
 */
const ACTIVE = DEFAULT;

/***
 * Array of all configurations.
 *
 * @type {GlobalConfiguration[]}
 */
const configs = [
	DEFAULT
];

/***
 * Exports.
 */
exports = module.exports = {
	configs : configs,
	DEFAULT : DEFAULT,
	ACTIVE  : ACTIVE
};