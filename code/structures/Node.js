/****************************
 * Node structure. Contains all information that is needed to define a single IMARD learning module.
 * Any module can be interpreted as a vertex in the graph with dependencies as graph edges.
 * The module structure is also defined in the related doc. Here is the implementation of this doc.
 *
 * @author GlaDos
 * @since 06.09.17
 ****************************/

"use strict";

/**
 * The node class implementation.
 *
 * @type {object}
 */
class Node {

	/**
	 * Node constructor. Takes all structure attributes as arguments.
	 *
	 * @param {string} subject module's learning subject
	 * @param {string} text module's text
	 * @param {string[]} dependsOn array of module's dependencies with other themes.
	 */
	constructor (subject, text, dependsOn) {
		this.subject   = subject;
		this.text      = text;
		this.dependsOn = dependsOn;
	}

	/**
	 * Returns module's subject.
	 *
	 * @return {string} module's subject
	 */
	getSubject () {
		return this.subject;
	}

	/**
	 * Returns module's text.
	 *
	 * @return {string} module's text
	 */
	getText () {
		return this.text;
	}

	/**
	 * Returns module's dependencies with other themes.
	 *
	 * @return {string[]} module's dependencies
	 */
	getDependencies () {
		return this.dependsOn;
	}
}

/**
 * Exports.
 */
exports = module.exports = Node;