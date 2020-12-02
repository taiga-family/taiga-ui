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
"use strict";
var utils_1 = require("./utils");
/**
 * Implementation of the IOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
var Options = (function () {
    function Options(options) {
        if (options === void 0) { options = {}; }
        this.aliasString = "=";
        this.attributeString = "@";
        this.cdataInvalidChars = false;
        this.cdataKeys = [];
        this.valueString = "#";
        if (!utils_1.isObject(options)) {
            throw new TypeError("options should be an Object or undefined");
        }
        if (!utils_1.isString(options.aliasString)) {
            if (!utils_1.isUndefined(options.aliasString)) {
                throw new TypeError("options.aliasString should be a string or"
                    + " undefined");
            }
        }
        else {
            this.aliasString = options.aliasString;
        }
        if (!utils_1.isString(options.attributeString)) {
            if (!utils_1.isUndefined(options.attributeString)) {
                throw new TypeError("options.attributeString should be a string"
                    + " or undefined");
            }
        }
        else {
            this.attributeString = options.attributeString;
        }
        if (!utils_1.isBoolean(options.cdataInvalidChars)) {
            if (!utils_1.isUndefined(options.cdataInvalidChars)) {
                throw new TypeError("options.cdataInvalidChars should be a"
                    + " boolean or undefined");
            }
        }
        else {
            this.cdataInvalidChars = options.cdataInvalidChars;
        }
        if (!utils_1.isStringArray(options.cdataKeys)) {
            if (!utils_1.isUndefined(options.cdataKeys)) {
                throw new TypeError("options.cdataKeys should be an Array or" +
                    " undefined");
            }
        }
        else {
            this.cdataKeys = options.cdataKeys;
        }
        this.declaration = new DeclarationOptions(options.declaration);
        this.dtd = new DtdOptions(options.dtd);
        this.format = new FormatOptions(options.format);
        this.typeHandlers = new TypeHandlers(options.typeHandlers);
        if (!utils_1.isString(options.valueString)) {
            if (!utils_1.isUndefined(options.valueString)) {
                throw new TypeError("options.valueString should be a string"
                    + " or undefined");
            }
        }
        else {
            this.valueString = options.valueString;
        }
        this.wrapHandlers = new WrapHandlers(options.wrapHandlers);
    }
    return Options;
}());
exports.Options = Options;
/**
 * Implementation of the IDeclarationOptions interface used to provide default
 * values to fields.
 *
 * @private
 */
var DeclarationOptions = (function () {
    function DeclarationOptions(declarationOptions) {
        if (declarationOptions === void 0) { declarationOptions = {}; }
        this.include = true;
        if (!utils_1.isObject(declarationOptions)) {
            throw new TypeError("options.declaration should be an Object or"
                + " undefined");
        }
        if (!utils_1.isBoolean(declarationOptions.include)) {
            if (!utils_1.isUndefined(declarationOptions.include)) {
                throw new TypeError("options.declaration.include should be a"
                    + " boolean or undefined");
            }
        }
        else {
            this.include = declarationOptions.include;
        }
        // Validation performed by xmlcreate
        this.encoding = declarationOptions.encoding;
        this.standalone = declarationOptions.standalone;
        this.version = declarationOptions.version;
    }
    return DeclarationOptions;
}());
exports.DeclarationOptions = DeclarationOptions;
/**
 * Implementation of the IDtdOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
var DtdOptions = (function () {
    function DtdOptions(dtdOptions) {
        if (dtdOptions === void 0) { dtdOptions = {}; }
        this.include = false;
        if (!utils_1.isObject(dtdOptions)) {
            throw new TypeError("options.dtd should be an Object or undefined");
        }
        if (!utils_1.isBoolean(dtdOptions.include)) {
            if (!utils_1.isUndefined(dtdOptions.include)) {
                throw new TypeError("options.dtd.include should be a boolean"
                    + " or undefined");
            }
        }
        else {
            this.include = dtdOptions.include;
        }
        // Validation performed by xmlcreate
        this.name = dtdOptions.name;
        this.sysId = dtdOptions.sysId;
        this.pubId = dtdOptions.pubId;
    }
    return DtdOptions;
}());
exports.DtdOptions = DtdOptions;
/**
 * Implementation of the IFormatOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
var FormatOptions = (function () {
    function FormatOptions(formatOptions) {
        if (formatOptions === void 0) { formatOptions = {}; }
        if (!utils_1.isObject(formatOptions)) {
            throw new TypeError("options.format should be an Object or"
                + " undefined");
        }
        // Validation performed by xmlcreate
        this.doubleQuotes = formatOptions.doubleQuotes;
        this.indent = formatOptions.indent;
        this.newline = formatOptions.newline;
        this.pretty = formatOptions.pretty;
    }
    return FormatOptions;
}());
exports.FormatOptions = FormatOptions;
/**
 * Implementation of the ITypeHandlers interface used to provide default values
 * to fields.
 *
 * @private
 */
var TypeHandlers = (function () {
    function TypeHandlers(typeHandlers) {
        if (typeHandlers === void 0) { typeHandlers = {}; }
        if (!utils_1.isObject(typeHandlers)) {
            throw new TypeError("options.typeHandlers should be an Object or"
                + " undefined");
        }
        for (var key in typeHandlers) {
            if (typeHandlers.hasOwnProperty(key)) {
                if (!utils_1.isFunction(typeHandlers[key])) {
                    throw new TypeError("options.typeHandlers['" + key + "']" +
                        " should be a Function");
                }
                else {
                    this[key] = typeHandlers[key];
                }
            }
        }
    }
    return TypeHandlers;
}());
exports.TypeHandlers = TypeHandlers;
/**
 * Implementation of the IWrapHandlers interface used to provide default values
 * to fields.
 *
 * @private
 */
var WrapHandlers = (function () {
    function WrapHandlers(wrapHandlers) {
        if (wrapHandlers === void 0) { wrapHandlers = {}; }
        if (!utils_1.isObject(wrapHandlers)) {
            throw new TypeError("options.wrapHandlers should be an Object or"
                + " undefined");
        }
        for (var key in wrapHandlers) {
            if (wrapHandlers.hasOwnProperty(key)) {
                if (!utils_1.isFunction(wrapHandlers[key])) {
                    throw new TypeError("options.wrapHandlers['" + key + "']" +
                        " should be a Function");
                }
                else {
                    this[key] = wrapHandlers[key];
                }
            }
        }
    }
    return WrapHandlers;
}());
exports.WrapHandlers = WrapHandlers;
