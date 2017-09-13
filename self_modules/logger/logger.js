/****************************
 * An instrument for managing console logs.
 *
 * @author GlaDos
 * @since < 10.16.16
 ****************************/

"use strict";

/**
 * Logger initial configuration. Can be changed through the logger after initializing the last one.
 *
 * @type {{enableLoggingIntoConsole: boolean}}
 * @since < 10.16.16
 */
const DEFAULT_CONFIG = { enableLoggingIntoConsole : false };

/**
 * The Logger itself. Contains configuration and the log() function.
 *
 * @since < 10.16.16
 */
const logger = {
	configuration : DEFAULT_CONFIG,

	/* eslint-disable no-console */

	log : (message) => {
		if (logger.configuration.enableLoggingIntoConsole)
			console.log(message);

		return logger.configuration.enableLoggingIntoConsole;
	}

	/* eslint-enable no-console */
};

/**
 * Exports.
 *
 * @since < 10.16.16
 */
exports = module.exports = logger;