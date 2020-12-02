"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Represents an XML node.
 *
 * This class is the root class of the XML node hierarchy. It should not be
 * directly instantiated; one of its subclasses should be used instead.
 *
 * @protected
 */
var XmlNode = (function () {
    /**
     * Initializes a new instance of the {@link XmlNode} class.
     */
    function XmlNode() {
        this._parent = undefined;
        this._children = [];
    }
    Object.defineProperty(XmlNode.prototype, "parent", {
        /**
         * Gets the parent of this node.
         *
         * @returns The parent of this node.
         */
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets this node's children.
     *
     * Throws an exception if this node cannot have any children. Consult the
     * appropriate subclass documentation for more details.
     *
     * @returns This node's children.
     */
    XmlNode.prototype.children = function () {
        return this._children.slice();
    };
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Throws an exception if this node cannot have any children, or if the
     * specified node cannot be added at the specified index. Consult the
     * appropriate subclass documentation for more details.
     *
     * @param node The node to insert.
     * @param index The index at which to insert the node. Nodes at or after
     *              the index are shifted to the right. If no index is
     *              specified, the node is inserted at the end.
     *
     * @returns The node inserted into this node's children, or undefined if no
     *          node was inserted.
     */
    XmlNode.prototype.insertChild = function (node, index) {
        if (index === void 0) { index = this._children.length; }
        if (!(node instanceof XmlNode)) {
            throw new TypeError("node should be an instance of XmlNode");
        }
        else if (!utils_1.isNumber(index) || !utils_1.isInteger(index)) {
            throw new TypeError("index should be an integer");
        }
        else if (index < 0 || index > this._children.length) {
            throw new RangeError("index should respect children array bounds");
        }
        if (this._children.indexOf(node) === -1) {
            if (!utils_1.isUndefined(node.parent)) {
                node.parent.removeChild(node);
            }
            node._parent = this;
            this._children.splice(index, 0, node);
            return node;
        }
        return undefined;
    };
    /**
     * Gets the node that follows this one, or undefined if no such node
     * exists or if this node has no parent.
     *
     * @returns The node that follows this one, or undefined if no such node
     *          exists or if this node has no parent.
     */
    XmlNode.prototype.next = function () {
        if (utils_1.isUndefined(this.parent)) {
            return undefined;
        }
        else if (this.parent._children.indexOf(this)
            === this.parent._children.length - 1) {
            return undefined;
        }
        return this.parent._children[this.parent._children.indexOf(this) + 1];
    };
    /**
     * Gets the node that is previous to this one, or undefined if no such node
     * exists or if this node has no parent.
     *
     * @returns The node that is previous to this one, or undefined if no such
     *          node exists or if this node has no parent.
     */
    XmlNode.prototype.prev = function () {
        if (utils_1.isUndefined(this.parent)) {
            return undefined;
        }
        else if (this.parent._children.indexOf(this) === 0) {
            return undefined;
        }
        return this.parent._children[this.parent._children.indexOf(this) - 1];
    };
    /**
     * Removes this node from its parent if this node has a parent.
     *
     * @returns This node's parent, or undefined if it has no parent.
     */
    XmlNode.prototype.remove = function () {
        if (!utils_1.isUndefined(this.parent)) {
            var parent_1 = this.parent;
            this.parent.removeChild(this);
            return parent_1;
        }
        return undefined;
    };
    /**
     * Removes the specified node from this node's children.
     *
     * Throws an exception if this node cannot have any children, or if the
     * specified node cannot be removed. Consult the appropriate subclass
     * documentation for more details.
     *
     * @param node The node to remove.
     *
     * @returns Whether a node was removed.
     */
    XmlNode.prototype.removeChild = function (node) {
        if (!(node instanceof XmlNode)) {
            throw new Error("node should be an instance of XmlNode");
        }
        var index = this._children.indexOf(node);
        if (index !== -1) {
            node._parent = undefined;
            this._children.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * Removes the node at the specified index from this node's children.
     *
     * Throws an exception if this node cannot have any children, or if the
     * node at the specified index cannot be removed. Consult the appropriate
     * subclass documentation for more details.
     *
     * @param index The index at which the node to be removed is located.
     *
     * @returns The node that was removed.
     */
    XmlNode.prototype.removeChildAtIndex = function (index) {
        if (!utils_1.isNumber(index) || !utils_1.isInteger(index)) {
            throw new TypeError("index should be a number");
        }
        else if (index < 0 || index >= this._children.length) {
            throw new RangeError("index should respect children array bounds");
        }
        var node = this._children[index];
        node._parent = undefined;
        this._children.splice(index, 1);
        return node;
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    XmlNode.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        throw new Error("toString not implemented for XmlNode");
    };
    /**
     * Returns the root node of the current hierarchy. If this node has no
     * parent, this node itself is returned.
     *
     * @returns The root node of the current hierarchy.
     */
    XmlNode.prototype.top = function () {
        if (utils_1.isUndefined(this.parent)) {
            return this;
        }
        else {
            return this.parent.top();
        }
    };
    /**
     * Gets the parent of this node.
     */
    XmlNode.prototype.up = function () {
        return this.parent;
    };
    return XmlNode;
}());
exports.default = XmlNode;
