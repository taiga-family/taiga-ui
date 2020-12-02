"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2016 Michael Kourlas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var escape_1 = require("../escape");
var options_1 = require("../options");
var utils_1 = require("../utils");
var validate_1 = require("../validate");
var XmlAttributeText_1 = require("./XmlAttributeText");
var XmlCharRef_1 = require("./XmlCharRef");
var XmlEntityRef_1 = require("./XmlEntityRef");
var XmlNode_1 = require("./XmlNode");
/**
 * Represents an XML element attribute.
 *
 * An XML element attribute is part of the start tag of an element and is
 * structured as follows, where `{name}` is the name of the attribute and
 * `{value}` is the value of the attribute:
 *
 * ```xml
 * <element {name}="{value}">
 * ```
 *
 * The `{name}` value is a property of this node, while the `{value}` property
 * consists of the children of this node.
 *
 * XmlAttribute nodes must have at least one child, and can have an unlimited
 * number of {@link XmlAttributeText}, {@link XmlCharRef}, and
 * {@link XmlEntityRef} nodes as children.
 */
var XmlAttribute = (function (_super) {
    __extends(XmlAttribute, _super);
    /**
     * Initializes a new instance of the {@link XmlAttribute} class.
     *
     * @param name The name of the XML attribute.
     * @param value The initial value of the XML attribute. Additional children
     *              can be added later. Only {@link XmlAttributeText},
     *              {@link XmlCharRef}, and {@link XmlEntityRef} nodes are
     *              permitted.
     */
    function XmlAttribute(name, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        if (utils_1.isArray(value)) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var node = value_1[_i];
                _this.insertChild(node);
            }
        }
        else {
            _this.insertChild(value);
        }
        return _this;
    }
    Object.defineProperty(XmlAttribute.prototype, "name", {
        /**
         * Gets the name of this attribute.
         *
         * @returns The name of this attribute.
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name of this attribute.
         *
         * @param name The name of this attribute.
         */
        set: function (name) {
            if (!utils_1.isString(name)) {
                throw new TypeError("name should be a string");
            }
            else if (!validate_1.validateName(name)) {
                throw new Error("name should not contain characters not"
                    + " allowed in XML names");
            }
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inserts a new XML character reference at the specified index.
     *
     * @param char The character to represent using the reference.
     * @param hex Whether to use the hexadecimal or decimal representation for
     *            the reference. If left undefined, decimal is the default.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created XML declaration.
     */
    XmlAttribute.prototype.charRef = function (char, hex, index) {
        var charRef = new XmlCharRef_1.default(char, hex);
        this.insertChild(charRef, index);
        return charRef;
    };
    /**
     * Inserts a new XML entity reference at the specified index.
     *
     * @param entity The entity to be referenced.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created XML declaration.
     */
    XmlAttribute.prototype.entityRef = function (entity, index) {
        var charRef = new XmlEntityRef_1.default(entity);
        this.insertChild(charRef, index);
        return charRef;
    };
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Note that only {@link XmlCharRef}, {@link XmlEntityRef}, and
     * {@link XmlCharData} nodes can be inserted; otherwise, an exception will
     * be thrown.
     *
     * @param node The node to insert.
     * @param index The index at which to insert the node. Nodes at or after the
     *              index are shifted to the right. If no index is specified,
     *              the node is inserted at the end.
     *
     * @returns The node inserted into this node's children, or undefined if no
     *          node was inserted.
     */
    XmlAttribute.prototype.insertChild = function (node, index) {
        if (!(node instanceof XmlCharRef_1.default || node instanceof XmlEntityRef_1.default ||
            node instanceof XmlAttributeText_1.default)) {
            throw new TypeError("node should be an instance of XmlCharRef,"
                + " XmlEntityRef, or XmlAttributeText");
        }
        return _super.prototype.insertChild.call(this, node, index);
    };
    /**
     * Removes the specified node from this node's children.
     *
     * Note that this node must have at least one child. Attempts to remove
     * the last child node will result in an exception.
     *
     * @param node The node to remove.
     *
     * @returns Whether a node was removed.
     */
    XmlAttribute.prototype.removeChild = function (node) {
        if (this._children.length === 1) {
            throw new Error("XmlAttribute nodes must have at least one child");
        }
        return _super.prototype.removeChild.call(this, node);
    };
    /**
     * Removes the node at the specified index from this node's children.
     *
     * Note that this node must have at least one child. Attempts to remove
     * the last child node will result in an exception.
     *
     * @param index The index at which the node to be removed is located.
     *
     * @returns The node that was removed, or undefined if no node was removed.
     */
    XmlAttribute.prototype.removeChildAtIndex = function (index) {
        if (this._children.length === 1) {
            throw new Error("XmlAttribute nodes must have at least one child");
        }
        return _super.prototype.removeChildAtIndex.call(this, index);
    };
    /**
     * Inserts a new XML text node at the specified index.
     *
     * @param text Arbitrary character data.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created XML declaration.
     */
    XmlAttribute.prototype.text = function (text, index) {
        var textNode = new XmlAttributeText_1.default(text);
        this.insertChild(textNode, index);
        return textNode;
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    XmlAttribute.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        var optionsObj = new options_1.StringOptions(options);
        var quote = optionsObj.doubleQuotes ? "\"" : "'";
        var str = this.name + "=" + quote;
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (optionsObj.doubleQuotes) {
                str += escape_1.escapeDoubleQuotes(child.toString(options));
            }
            else {
                str += escape_1.escapeSingleQuotes(child.toString(options));
            }
        }
        str += quote;
        return str;
    };
    return XmlAttribute;
}(XmlNode_1.default));
exports.default = XmlAttribute;
