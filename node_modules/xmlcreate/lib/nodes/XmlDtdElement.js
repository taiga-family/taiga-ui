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
 * Represents an XML element declaration in a document type definition.
 *
 * An XML element declaration is structured as follows, where `{text}` is the
 * text of the declaration:
 *
 * ```xml
 * <!ELEMENT {text}>
 * ```
 *
 * The `{text}` value is a property of this node.
 *
 * XmlDtdElement nodes cannot have any children.
 */
var XmlDtdElement = (function (_super) {
    __extends(XmlDtdElement, _super);
    /**
     * Initializes a new instance of the {@link XmlDtdElement} class.
     *
     * @param text The text associated with the XML element declaration.
     */
    function XmlDtdElement(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(XmlDtdElement.prototype, "text", {
        /**
         * Gets the text associated with the XML element declaration.
         *
         * @return The text associated with the XML element declaration.
         */
        get: function () {
            return this._text;
        },
        /**
         * Sets the text associated with the XML element declaration.
         *
         * @param text The text associated with the XML element declaration.
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
     * Throws an exception since {@link XmlDtdElement} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    XmlDtdElement.prototype.children = function () {
        throw new Error("XmlDtdElement nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdElement} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdElement.prototype.insertChild = function (node, index) {
        throw new Error("XmlDtdElement nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdElement} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdElement.prototype.removeChild = function (node) {
        throw new Error("XmlDtdElement nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdElement} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdElement.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlDtdElement nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    XmlDtdElement.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        return "<!ELEMENT " + this.text + ">";
    };
    return XmlDtdElement;
}(XmlNode_1.default));
exports.default = XmlDtdElement;
