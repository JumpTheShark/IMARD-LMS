/****************************
 * Emitted database for modules (nodes) as a plug for some time.
 *
 * @author GlaDos
 * @since 06.09.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const NodeTree = require("../structures/NodeTree");

class NodeStorage {

	/**
	 * Node storage constructor. Initializes an empty data container.
	 */
	constructor () {
		this.nodes = {};
	}

	/**
	 * Adds new node (IMARD module) into this storage.
	 *
	 * @param {Node} node new node to write into the storage
	 * @return {void} nothing
	 */
	putNode (node) {
		this.nodes[node.getSubject()] = node;
	}

	/**
	 * Returns module by related subject.
	 *
	 * @param {string} subject module's subject
	 * @return {Node} module's Node instance
	 */
	getNode (subject) {
		return this.nodes[subject];
	}

	/**
	 * Checks if there exists a module with the given subject.
	 *
	 * @param {string} subject module's subject
	 * @return {boolean} whether the given subject corresponds to some module
	 */
	containsNode (subject) {
		return this.nodes[subject] !== undefined;
	}

	/**
	 * Returns a tree of nodes where given node is root and nodes' dependencies are edges.
	 *
	 * @param {string} rootSubject the root subject related to the root node
	 * @return {NodeTree} the node tree starting from the given root node
	 */
	getTree (rootSubject) {
		const rootNode = this.nodes[rootSubject];

		if (rootNode === undefined)
			throw new Error(`attempt to get node tree with non-existing module of subject "${rootSubject}"`);

		return new NodeTree(this, rootNode);
	}
}

/**
 * The node storage as a singleton object for the single server program.
 *
 * @type {NodeStorage} object
 */
const nodeStorage = new NodeStorage();

/**
 * Exports.
 */
exports = module.exports = nodeStorage;