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
var utils_1 = require("../utils");
var validate_1 = require("../validate");
var XmlNode_1 = require("./XmlNode");
/**
 * Represents an XML notation declaration in a document type definition.
 *
 * An XML notation declaration is structured as follows, where `{text}` is the
 * text of the declaration:
 *
 * ```xml
 * <!NOTATION {text}>
 * ```
 *
 * The `{text}` value is a property of this node.
 *
 * XmlDtdNotation nodes cannot have any children.
 */
var XmlDtdNotation = (function (_super) {
    __extends(XmlDtdNotation, _super);
    /**
     * Initializes a new instance of the {@link XmlDtdNotation} class.
     *
     * @param text The text associated with the XML notation declaration.
     */
    function XmlDtdNotation(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(XmlDtdNotation.prototype, "text", {
        /**
         * Gets the text associated with the XML notation declaration.
         *
         * @return The text associated with the XML notation declaration.
         */
        get: function () {
            return this._text;
        },
        /**
         * Sets the text associated with the XML notation declaration.
         *
         * @param text The text associated with the XML notation declaration.
         */
        set: function (text) {
            if (!utils_1.isString(text)) {
                throw new TypeError("text should be a string");
            }
            else if (!validate_1.validateChar(text)) {
                throw new Error("data should not contain characters"
                    + " not allowed in XML");
            }
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Throws an exception since {@link XmlDtdNotation} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    XmlDtdNotation.prototype.children = function () {
        throw new Error("XmlDtdNotation nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdNotation} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdNotation.prototype.insertChild = function (node, index) {
        throw new Error("XmlDtdNotation nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdNotation} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdNotation.prototype.removeChild = function (node) {
        throw new Error("XmlDtdNotation nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdNotation} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdNotation.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlDtdNotation nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    XmlDtdNotation.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        return "<!NOTATION " + this.text + ">";
    };
    return XmlDtdNotation;
}(XmlNode_1.default));
exports.default = XmlDtdNotation;
