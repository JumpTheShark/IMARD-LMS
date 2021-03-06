/****************************
 * An instrument for switching project to the test version (in case of using recourse).
 *
 * @author GlaDos
 * @since < 10.16.16
 ****************************/

"use strict";

/***
 * Imports.
 *
 * @since < 10.16.16
 */
const recourse = require("./recourse");

/**
 * Toggles in test mode all in server and logger folders
 *
 * @since < 10.16.16
 */
recourse.toggleTest("server");
recourse.toggleTest("self_modules/logger");