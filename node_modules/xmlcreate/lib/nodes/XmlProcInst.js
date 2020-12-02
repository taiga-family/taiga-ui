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
 * Represents an XML processing instruction.
 *
 * An XML processing instruction is structured as follows, where `{target}`
 * and `{content}` are the target and content of the processing instruction
 * respectively.
 *
 * ```xml
 * <?{target} {content}?>
 * ```
 *
 * The `{target}` and `{content}` values are properties of this node.
 *
 * XmlProcInst nodes cannot have any children.
 */
var XmlProcInst = (function (_super) {
    __extends(XmlProcInst, _super);
    /**
     * Initializes a new instance of the {@link XmlProcInst} class.
     *
     * @param target The target of the processing instruction.
     * @param content The data of the processing instruction, or undefined if
     *                there is no target.
     */
    function XmlProcInst(target, content) {
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.content = content;
        return _this;
    }
    Object.defineProperty(XmlProcInst.prototype, "target", {
        /**
         * Gets the target of the processing instruction.
         *
         * @returns The target of the processing instruction.
         */
        get: function () {
            return this._target;
        },
        /**
         * Sets the target of the processing instruction.
         *
         * @param target The target of the processing instruction.
         */
        set: function (target) {
            if (!utils_1.isString(target)) {
                throw new TypeError("target should be a string");
            }
            else if (!validate_1.validateChar(target)) {
                throw new Error("target should not contain characters"
                    + " not allowed in XML");
            }
            else if (target === "xml") {
                throw new Error("target should not be the string 'xml'");
            }
            this._target = target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlProcInst.prototype, "content", {
        /**
         * Gets the data of the processing instruction.
         *
         * @returns The data of the processing instruction. This value may be
         *          undefined.
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the data of the processing instruction.
         *
         * @param content The data of the processing instruction. This value may be
         *                undefined.
         */
        set: function (content) {
            if (!utils_1.isString(content) && !utils_1.isUndefined(content)) {
                throw new TypeError("data should be a string or undefined");
            }
            if (utils_1.isString(content)) {
                if (!validate_1.validateChar(content)) {
                    throw new Error("data should not contain characters"
                        + " not allowed in XML");
                }
                else if (/\?>/.test(content)) {
                    throw new Error("data should not contain the string '?>'");
                }
            }
            this._content = content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    XmlProcInst.prototype.children = function () {
        throw new Error("XmlProcInst nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlProcInst.prototype.insertChild = function (node, index) {
        throw new Error("XmlProcInst nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlProcInst.prototype.removeChild = function (node) {
        throw new Error("XmlProcInst nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlProcInst.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlProcInst nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns {string} An XML string representation of this node.
     */
    XmlProcInst.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        if (this.content === undefined) {
            return "<?" + this.target + "?>";
        }
        else {
            return "<?" + this.target + " " + this.content + "?>";
        }
    };
    return XmlProcInst;
}(XmlNode_1.default));
exports.default = XmlProcInst;
