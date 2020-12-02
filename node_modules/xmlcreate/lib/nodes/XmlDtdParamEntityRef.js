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
 * Represents an XML parameter entity reference in a document type definition.
 *
 * An XML parameter entity reference is structured as follows, where `{entity}`
 * is the name of the entity:
 *
 * ```xml
 * %{entity};
 * ```
 *
 * The `{entity}` value is a property of this node.
 *
 * XmlDtdParamEntityRef nodes cannot have any children.
 */
var XmlDtdParamEntityRef = (function (_super) {
    __extends(XmlDtdParamEntityRef, _super);
    /**
     * Initializes a new instance of the {@link XmlDtdParamEntityRef} class.
     *
     * @param entity The entity to be referenced.
     */
    function XmlDtdParamEntityRef(entity) {
        var _this = _super.call(this) || this;
        _this.entity = entity;
        return _this;
    }
    Object.defineProperty(XmlDtdParamEntityRef.prototype, "entity", {
        /**
         * Gets the entity to be referenced.
         *
         * @returns The entity to be referenced.
         */
        get: function () {
            return this._entity;
        },
        /**
         * Sets the entity to be referenced.
         *
         * @param entity The entity to be referenced.
         */
        set: function (entity) {
            if (!utils_1.isString(entity)) {
                throw new TypeError("entity should be a string");
            }
            else if (!validate_1.validateName(entity)) {
                throw new Error("entity should not contain characters"
                    + " not allowed in XML names");
            }
            this._entity = entity;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @returns This method does not return.
     */
    XmlDtdParamEntityRef.prototype.children = function () {
        throw new Error("XmlDtdParamEntityRef nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdParamEntityRef.prototype.insertChild = function (node, index) {
        throw new Error("XmlDtdParamEntityRef nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdParamEntityRef.prototype.removeChild = function (node) {
        throw new Error("XmlDtdParamEntityRef nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlDtdParamEntityRef.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlDtdParamEntityRef nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    XmlDtdParamEntityRef.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        return "%" + this.entity + ";";
    };
    return XmlDtdParamEntityRef;
}(XmlNode_1.default));
exports.default = XmlDtdParamEntityRef;
