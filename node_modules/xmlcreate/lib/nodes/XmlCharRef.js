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
 * Represents an XML character reference.
 *
 * An XML character reference is structured as follows, where `{dec}` is the
 * decimal representation code point corresponding to a particular Unicode
 * character:
 *
 * ```xml
 * &#{dec};
 * ```
 *
 * The corresponding hexadecimal version is structured as follows, where
 * `{hex}` is the hexadecimal representation code point corresponding to a
 * particular Unicode character:
 *
 * ```xml
 * &#x{hex};
 * ```
 *
 * Unicode characters outside of the Basic Multilingual Plane are represented
 * using a surrogate pair consisting of two character references.
 *
 * The `{dec}` and `{hex}` values are defined by the `char` and `hex`
 * properties of this node; the former is the character to be represented while
 * the latter indicates whether the decimal or hexadecimal representation
 * should be used.
 *
 * XmlCharRef nodes cannot have any children.
 */
var XmlCharRef = (function (_super) {
    __extends(XmlCharRef, _super);
    /**
     * Initializes a new instance of the {@link XmlCharRef} class.
     *
     * @param char The character to represent using the reference.
     * @param hex Whether to use the hexadecimal or decimal representation for
     *            the reference. If left undefined, decimal is the default.
     */
    function XmlCharRef(char, hex) {
        if (hex === void 0) { hex = false; }
        var _this = _super.call(this) || this;
        _this.char = char;
        _this.hex = hex;
        return _this;
    }
    Object.defineProperty(XmlCharRef.prototype, "char", {
        /**
         * Gets the character to represent using the reference.
         *
         * @returns The character to represent using the reference.
         */
        get: function () {
            return this._char;
        },
        /**
         * Sets the character to represent using the reference.
         *
         * @param char The character to represent using the reference.
         */
        set: function (char) {
            if (!utils_1.isString(char)) {
                throw new TypeError("char should be a string");
            }
            else if (!validate_1.validateSingleChar(char)) {
                throw new Error("char should contain a single character, and this"
                    + " character should be allowed in XML");
            }
            this._char = char;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlCharRef.prototype, "hex", {
        /**
         * Gets whether or not to use the hexadecimal or decimal representation for
         * the reference.
         *
         * @returns Whether or not to use the hexadecimal or decimal representation
         *          for the reference.
         */
        get: function () {
            return this._hex;
        },
        /**
         * Sets whether or not to use the hexadecimal or decimal representation for
         * the reference.
         *
         * @param hex Whether or not to use the hexadecimal or decimal
         *            representation for the reference.
         */
        set: function (hex) {
            if (!utils_1.isBoolean(hex)) {
                throw new TypeError("hex should be a boolean");
            }
            this._hex = hex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Throws an exception since {@link XmlCharRef} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    XmlCharRef.prototype.children = function () {
        throw new Error("XmlCharRef nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCharRef} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCharRef.prototype.insertChild = function (node, index) {
        throw new Error("XmlCharRef nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCharRef} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCharRef.prototype.removeChild = function (node) {
        throw new Error("XmlCharRef nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCharRef} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCharRef.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlCharRef nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns {string} An XML string representation of this node.
     */
    XmlCharRef.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        var char;
        if (this.char.length === 1) {
            char = this.char.charCodeAt(0);
        }
        else {
            char = utils_1.getCodePoint(this.char, 0);
        }
        if (this.hex) {
            return "&#x" + char.toString(16) + ";";
        }
        else {
            return "&#" + char + ";";
        }
    };
    return XmlCharRef;
}(XmlNode_1.default));
exports.default = XmlCharRef;
