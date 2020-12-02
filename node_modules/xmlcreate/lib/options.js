"use strict";
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
var utils_1 = require("./utils");
/**
 * Implementation of the IStringOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
var StringOptions = (function () {
    function StringOptions(stringOptions) {
        if (stringOptions === void 0) { stringOptions = {}; }
        this.doubleQuotes = false;
        this.indent = "    ";
        this.newline = "\n";
        this.pretty = true;
        if (!utils_1.isObject(stringOptions)) {
            throw new TypeError("options should be an Object or undefined");
        }
        if (!utils_1.isBoolean(stringOptions.doubleQuotes)) {
            if (!utils_1.isUndefined(stringOptions.doubleQuotes)) {
                throw new TypeError("options.doubleQuotes should be a boolean"
                    + " or undefined");
            }
        }
        else {
            this.doubleQuotes = stringOptions.doubleQuotes;
        }
        if (!utils_1.isString(stringOptions.indent)) {
            if (!utils_1.isUndefined(stringOptions.indent)) {
                throw new TypeError("options.indent should be a string"
                    + " or undefined");
            }
        }
        else {
            this.indent = stringOptions.indent;
        }
        if (!utils_1.isString(stringOptions.newline)) {
            if (!utils_1.isUndefined(stringOptions.newline)) {
                throw new TypeError("options.newline should be a string"
                    + " or undefined");
            }
        }
        else {
            this.newline = stringOptions.newline;
        }
        if (!utils_1.isBoolean(stringOptions.pretty)) {
            if (!utils_1.isUndefined(stringOptions.pretty)) {
                throw new TypeError("options.pretty should be a boolean"
                    + " or undefined");
            }
        }
        else {
            this.pretty = stringOptions.pretty;
        }
    }
    return StringOptions;
}());
exports.StringOptions = StringOptions;
/**
 * Implementation of the IDeclarationOptions interface used to provide default
 * values to fields.
 *
 * @private
 */
var DeclarationOptions = (function () {
    function DeclarationOptions(declarationOptions) {
        if (declarationOptions === void 0) { declarationOptions = {}; }
        this.version = "1.0";
        if (!utils_1.isObject(declarationOptions)) {
            throw new TypeError("options should be an Object or undefined");
        }
        if (!utils_1.isString(declarationOptions.encoding)) {
            if (!utils_1.isUndefined(declarationOptions.encoding)) {
                throw new TypeError("options.encoding should be a string"
                    + " or undefined");
            }
        }
        else {
            this.encoding = declarationOptions.encoding;
        }
        if (!utils_1.isString(declarationOptions.standalone)) {
            if (!utils_1.isUndefined(declarationOptions.standalone)) {
                throw new TypeError("options.standalone should be a string"
                    + " or undefined");
            }
        }
        else {
            this.standalone = declarationOptions.standalone;
        }
        if (!utils_1.isString(declarationOptions.version)) {
            if (!utils_1.isUndefined(declarationOptions.version)) {
                throw new TypeError("options.version should be a string"
                    + " or undefined");
            }
        }
        else {
            this.version = declarationOptions.version;
        }
    }
    return DeclarationOptions;
}());
exports.DeclarationOptions = DeclarationOptions;
