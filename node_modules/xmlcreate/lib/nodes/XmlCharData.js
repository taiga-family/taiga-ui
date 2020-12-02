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
var utils_1 = require("../utils");
var validate_1 = require("../validate");
var XmlNode_1 = require("./XmlNode");
/**
 * Represents character data in an XML document.
 *
 * Restricted characters, such as the ampersand (`&`), the opening angle
 * bracket (`<`), and the closing angle bracket (`>`) when it appears in the
 * string `]]>`, are all automatically escaped.
 *
 * To create an character reference or entity reference, you should use
 * {@link XmlCharRef} or {@link XmlEntityRef} respectively instead.
 *
 * XmlCharData nodes cannot have any children.
 */
var XmlCharData = (function (_super) {
    __extends(XmlCharData, _super);
    /**
     * Initializes a new instance of the {@link XmlCharData} class.
     *
     * @param charData Character data.
     */
    function XmlCharData(charData) {
        var _this = _super.call(this) || this;
        _this.charData = charData;
        return _this;
    }
    Object.defineProperty(XmlCharData.prototype, "charData", {
        /**
         * Gets the character data associated with this node.
         *
         * @returns The character data associated with this node.
         */
        get: function () {
            return this._charData;
        },
        /**
         * Sets the character data associated with this node.
         *
         * @param charData Character data.
         */
        set: function (charData) {
            if (!utils_1.isString(charData)) {
                throw new TypeError("charData should be a string");
            }
            else if (!validate_1.validateChar(charData)) {
                throw new Error("charData should not contain characters not allowed"
                    + " in XML");
            }
            this._charData = charData;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    XmlCharData.prototype.children = function () {
        throw new Error("XmlCharData nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCharData.prototype.insertChild = function (node, index) {
        throw new Error("XmlCharData nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCharData.prototype.removeChild = function (node) {
        throw new Error("XmlCharData nodes cannot have children");
    };
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    XmlCharData.prototype.removeChildAtIndex = function (index) {
        throw new Error("XmlCharData nodes cannot have children");
    };
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns {string} An XML string representation of this node.
     */
    XmlCharData.prototype.toString = function (options) {
        if (options === void 0) { options = {}; }
        var str = this.charData;
        str = escape_1.escapeAmpersands(str);
        str = escape_1.escapeLeftAngleBrackets(str);
        str = escape_1.escapeRightAngleBracketsInCdataTerminator(str);
        return str;
    };
    return XmlCharData;
}(XmlNode_1.default));
exports.default = XmlCharData;
