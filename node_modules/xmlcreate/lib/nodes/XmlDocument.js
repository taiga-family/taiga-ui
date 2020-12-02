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
var options_1 = require("../options");
var utils_1 = require("../utils");
var XmlComment_1 = require("./XmlComment");
var XmlDecl_1 = require("./XmlDecl");
var XmlDtd_1 = require("./XmlDtd");
var XmlElement_1 = require("./XmlElement");
var XmlNode_1 = require("./XmlNode");
var XmlProcInst_1 = require("./XmlProcInst");
/**
 * Represents an XML document.
 *
 * A sample XML document is structured as follows:
 *
 * ```xml
 * <?xml version="1.0" encoding="UTF-8"?>
 * <DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 *                      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
 * <html>
 *     <head>
 *         <title>My page title</title>
 *     </head>
 *     <body>
 *         <h1>Welcome!</h1>
 *         <p>I hope you enjoy visiting my website.</p>
 *         <img src="picture.png"/>
 *     </body>
 * </html>
 * ```
 *
 * Each component of the document, such as the XML declaration, document type
 * definition, and root element, are children of this node.
 *
 * XmlDocument nodes must have exactly one {@link XmlElement} child, which is
 * the document's root element.
 *
 * XmlDocument nodes can have exactly one {@link XmlDecl} and {@link XmlDtd}
 * child in that order, so long as they precede the {@link XmlElement} node.
 *
 * XmlDocument nodes can have an unlimited number of {@link XmlComment} or
 * {@link XmlProcInst} nodes, so long as they follow the {@link XmlDecl} node,
 * if one exists.
 */
var XmlDocument = (function (_super) {
    __extends(XmlDocument, _super);
    /**
     * Initializes a new instance of the {@link XmlDocument} class.
     *
     * @param root The name of the root element.
     */
    function XmlDocument(root) {
        var _this = _super.call(this) || this;
        _super.prototype.insertChild.call(_this, new XmlElement_1.default(root));
        return _this;
    }
    /**
     * Inserts a new comment at the specified index. If no index is specified,
     * the node is inserted at the end of this node's children.
     *
     * @param content The data of the comment.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created element.
     */
    XmlDocument.prototype.comment = function (content, index) {
        if (index === void 0) { index = this._children.length; }
        var comment = new XmlComment_1.default(content);
        this.insertChild(comment, index);
        return comment;
    };
    /**
     * Inserts a new XML declaration at the beginning of this node's children.
     *
     * @param options The options associated with the XML declaration.
     *
     * @returns The newly created XML declaration.
     */
    XmlDocument.prototype.decl = function (options) {
        var declaration = new XmlDecl_1.default(options);
        this.insertChild(declaration, 0);
        return declaration;
    };
    /**
     * Inserts a new XML document type definition. Unless a different index is
     * specified, the node is inserted immediately after the XML declaration
     * if one exists, or at the beginning of this node's children if one does
     * not.
     *
     * @param name The name of the DTD.
     * @param sysId The system identifier of the DTD, excluding quotation marks.
     * @param pubId The public identifier of the DTD, excluding quotation marks.
     *              If a public identifier is provided, a system identifier
     *              must be provided as well.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted immediately after the
     *              XML declaration if one exists, or at the beginning of this
     *              node's children if one does not.
     *
     * @returns The newly created XML document type definition.
     */
    XmlDocument.prototype.dtd = function (name, sysId, pubId, index) {
        var dtd = new XmlDtd_1.default(name, sysId, pubId);
        if (utils_1.isUndefined(index)) {
            if (this._children[0] instanceof XmlDecl_1.default) {
                index = 1;
            }
            else {
                index = 0;
            }
        }
        this.insertChild(dtd, index);
        return dtd;
    };
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Only {@link XmlComment}, {@link XmlDecl}, {@link XmlDtd}, or
     * {@link XmlProcInst} nodes can be inserted. Furthermore, {@link XmlDecl}
     * and {@link XmlDtd} nodes must be inserted in that order and must
     * precede the {@link XmlElement} node. In addition, {@link XmlComment} or
     * {@link XmlProcInst} nodes must follow the {@link XmlDecl} node.
     *
     * @param node The node to insert.
     * @param index The index at which to insert the node. Nodes at or after
     *              the index are shifted to the right. If no index is
     *              specified, the node is inserted at the end.
     *
     * @returns The node inserted into this node's children, or undefined if no
     *          node was inserted.
     */
    XmlDocument.prototype.insertChild = function (node, index) {
        if (index === void 0) { index = this._children.length; }
        if (!(node instanceof XmlComment_1.default
            || node instanceof XmlDecl_1.default
            || node instanceof XmlDtd_1.default
            || node instanceof XmlProcInst_1.default)) {
            throw new TypeError("node should be an instance of"
                + " XmlComment, XmlDecl, XmlDtd, or"
                + " XmlProcInst");
        }
        if (node instanceof XmlComment_1.default || node instanceof XmlProcInst_1.default) {
            if (this._children[0] instanceof XmlDecl_1.default) {
                if (index === 0) {
                    throw new Error("XmlComment or XmlProcInst node should be"
                        + " inserted after the XmlDecl node");
                }
            }
        }
        else if (node instanceof XmlDecl_1.default) {
            if (this._children[0] instanceof XmlDecl_1.default) {
                throw new Error("XmlDocument node should only contain one"
                    + " XmlDecl node");
            }
            if (index !== 0) {
                throw new Error("XmlDecl node should be inserted at the"
                    + " beginning of an XmlDocument node");
            }
        }
        else if (node instanceof XmlDtd_1.default) {
            if (this._children[0] instanceof XmlDecl_1.default) {
                if (index === 0) {
                    throw new Error("XmlDtd node should be inserted after"
                        + " the XmlDecl node");
                }
            }
            for (var i = 0; i < index && i < this._children.length; i++) {
                if (this._children[i] instanceof XmlElement_1.default) {
                    throw new Error("XmlDtd node should be inserted before"
                        + " the XmlElement node");
                }
            }
            for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child instanceof XmlDtd_1.default) {
                    throw new Error("XmlDocument node should only contain"
                        + " one XmlDtd node");
                }
            }
        }
        return _super.prototype.insertChild.call(this, node, index);
    };
    /**
     * Inserts a new processing instruction at the specified index. If no index
     * is specified, the node is inserted at the end of this node's children.
     *
     * @param target The target of the processing instruction.
     * @param content The data of the processing instruction, or undefined if
     *                there is no target.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created processing instruction.
     */
    XmlDocument.prototype.procInst = function (target, content, index) {
        if (index === void 0) { index = this._children.length; }
        var procInst = new XmlProcInst_1.default(target, content);
        this.insertChild(procInst, index);
        return procInst;
    };
    /**
     * Removes the specified node from this node's children.
     *
     * Note that {@link XmlElement} nodes cannot be removed from this node;
     * attempts to do so will result in an exception being thrown.
     *
     * @param node The node to remove.
     *
     * @returns Whether a node was removed.
     */
    XmlDocument.prototype.removeChild = function (node) {
        if (node instanceof XmlElement_1.default) {
            throw new Error("XmlElement nodes cannot be removed from"
                + " XmlDocument nodes");
        }
        return _super.prototype.removeChild.call(this, node);
    };
    /**
     * Removes the node at the specified index from this node's children.
     *
     * Note that {@link XmlElement} nodes cannot be removed from this node;
     * attempts to do so will result in an exception being thrown.
     *
     * @param index The index at which the node to be removed is
     *                       located.
     *
     * @returns The node that was removed, or undefined if no node was removed.
     */
    XmlDocument.prototype.removeChildAtIndex = function (index) {
        if (this._children[index] instanceof XmlElement_1.default) {
            throw new Error("XmlElement nodes cannot be removed from"
                + " XmlDocument nodes");
        }
        return _super.prototype.removeChildAtIndex.call(this, index);
    };
    /**
     * Returns the root element of this document.
     *
     * @returns The root element of this document.
     */
    XmlDocument.prototype.root = function () {
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node instanceof XmlElement_1.default) {
                return node;
            }
        }
        throw new Error("XmlDocument does not contain a root node");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param {IStringOptions} [options] Formatting options for the string
     *                                  representation.
     *
     * @returns {string} An XML string representation of this node.
     */
    XmlDocument.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        var optionsObj = new options_1.StringOptions(options);
        var str = "";
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var node = _a[_i];
            str += node.toString(options);
            if (optionsObj.pretty) {
                str += optionsObj.newline;
            }
        }
        var len = str.length - optionsObj.newline.length;
        if (str.substr(len) === optionsObj.newline) {
            str = str.substr(0, len);
        }
        return str;
    };
    return XmlDocument;
}(XmlNode_1.default));
exports.default = XmlDocument;
