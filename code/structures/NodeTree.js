/****************************
 * Tree of IMARD modules with dependencies as edges.
 * Starts from any module (node), named root node of the tree.
 *
 * @author GlaDos
 * @since 09.09.17
 ****************************/

"use strict";

class NodeTree {

	/**
	 * Creates (builds) a new node tree by the given root node and node storage.
	 *
	 * @param {NodeStorage} storage node (module) storage to give access to the dependencies while building the tree
	 * @param {Node} root tree starting node
	 */
	constructor (storage, root) {
		this.inlinedNodes = [];
		this.nameIndexMap = {};

		const stack   = [root];
		let   curNode = null;

		while (stack.length > 0) {
			curNode = stack.pop();

			this.nameIndexMap[curNode.getSubject()] = this.inlinedNodes.length;
			this.inlinedNodes.push(curNode);

			for (const dependency in curNode.getDependencies())
				if (this.nameIndexMap[dependency] === undefined) {
					const depNode = storage.getNode(dependency);

					if (depNode !== undefined) {
						this.nameIndexMap[dependency] = null; /* buf value indicates that the dependency will be processed later */
						stack.push(depNode);
					}
				}
		}
	}

	/**
	 * Extracts a JSON object by this tree data.
	 *
	 * @return {JSON} tree in JSON representation
	 */
	extractJSON () {
		return JSON.stringify(this);
	}
}

/**
 * Exports.
 */
exports = module.exports = NodeTree;