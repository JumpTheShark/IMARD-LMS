/****************************
 * Global configuration class. Stores the configuration structure only.
 * Global configuration is an immutable object and cannot reassign any property after being constructed.
 *
 * @author GlaDos
 * @since 09.11.16
 ****************************/

"use strict";

/**
 * Global configuration class.
 *
 * @type {object}
 */
const GlobalConfiguration = class {

	/**
	 * The only constructor with all properties.
	 *
	 * @param {boolean} enableLogs whether the logging is enabled
	 * @param {int} port server listening port
	 */
	constructor (enableLogs, port) {
		this.loggerConfiguration = { enableLoggingIntoConsole : enableLogs };
		this.port                = port;
	}

	/**
	 * Returns logger configuration.
	 *
	 * @return {object} logger configuration
	 */
	getLoggerConfiguration () {
		return this.loggerConfiguration;
	}

	/**
	 * Returns the server listening port.
	 *
	 * @return {int} server port
	 */
	getPort () {
		return this.port;
	}
};

/***
 * Exports.
 */
exports = module.exports = GlobalConfiguration;