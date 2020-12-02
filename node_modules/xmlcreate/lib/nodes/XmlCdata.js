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
 * Represents an XML CDATA section.
 *
 * An XML CDATA section is structured as follows, where `{data}` is the
 * character data of the section:
 *
 * ```xml
 * <![CDATA[{data}]]>
 * ```
 *
 * The `{data}` value is a property of this node.
 *
 * XmlCdata nodes cannot have any children.
 */
var XmlCdata = (function (_super) {
    __extends(XmlCdata, _super);
    /**
     * Initializes a new instance of the {@link XmlCdata} class.
     *
     * @param data The character data of the CDATA section.
     */
    function XmlCdata(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(XmlCdata.prototype, "data", {
        /**
         * Gets the character data of the CDATA section.
         *
         * @returns The character data of the CDATA section.
         */
        get: function () {
            return this._data;
        },
        /**
         * Sets the character data of the CDATA section.
         *
         * @param data The character data of the CDATA section.
         */
        set: function (data) {
            if (!utils_1.isString(data)) {
                throw new TypeError("character data should be a string");
            }
            else if (!validate_1.validateChar(data)) {
                throw new Error("character data should not contain characters not"
                    + " allowed in XML");
            }
            else if (/]]>/.test(data)) {
                throw new Error("data should not contain the string ']]>'");
            }
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Throws an exception since {@link XmlCdata} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    XmlCdata.prototype.children = function () {
        throw new Error("XmlCdata nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCdata} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCdata.prototype.insertChild = function (node, index) {
        throw new Error("XmlCdata nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCdata} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCdata.prototype.removeChild = function (node) {
        throw new Error("XmlCdata nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCdata} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCdata.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlCdata nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    XmlCdata.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        return "<![CDATA[" + this.data + "]]>";
    };
    return XmlCdata;
}(XmlNode_1.default));
exports.default = XmlCdata;
