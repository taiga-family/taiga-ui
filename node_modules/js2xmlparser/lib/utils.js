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
/**
 * @private
 */
function isString(val) {
    return Object.prototype.toString.call(val) === "[object String]";
}
exports.isString = isString;
/**
 * @private
 */
function isNumber(val) {
    return Object.prototype.toString.call(val) === "[object Number]";
}
exports.isNumber = isNumber;
/**
 * @private
 */
function isBoolean(val) {
    return Object.prototype.toString.call(val) === "[object Boolean]";
}
exports.isBoolean = isBoolean;
/**
 * @private
 */
function isUndefined(val) {
    return Object.prototype.toString.call(val) === "[object Undefined]";
}
exports.isUndefined = isUndefined;
/**
 * @private
 */
function isNull(val) {
    return Object.prototype.toString.call(val) === "[object Null]";
}
exports.isNull = isNull;
/**
 * @private
 */
function isPrimitive(val) {
    return isString(val)
        || isNumber(val)
        || isBoolean(val)
        || isUndefined(val)
        || isNull(val);
}
exports.isPrimitive = isPrimitive;
/**
 * @private
 */
function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
}
exports.isObject = isObject;
/**
 * @private
 */
function isArray(val) {
    return Object.prototype.toString.call(val) === "[object Array]";
}
exports.isArray = isArray;
/**
 * @private
 */
function isStringArray(val) {
    if (!isArray(val)) {
        return false;
    }
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var entry = val_1[_i];
        if (!isString(entry)) {
            return false;
        }
    }
    return true;
}
exports.isStringArray = isStringArray;
/**
 * @private
 */
function isFunction(val) {
    return Object.prototype.toString.call(val) === "[object Function]";
}
exports.isFunction = isFunction;
/**
 * @private
 */
function isSet(val) {
    return Object.prototype.toString.call(val) === "[object Set]";
}
exports.isSet = isSet;
/**
 * @private
 */
function isMap(val) {
    return Object.prototype.toString.call(val) === "[object Map]";
}
exports.isMap = isMap;
/**
 * Returns a string representation of the specified value, as given by the
 * value's toString() method (if it has one) or the global String() function
 * (if it does not).
 *
 * @param value The value to convert to a string.
 *
 * @returns A string representation of the specified value.
 *
 * @private
 */
function stringify(value) {
    if (!isUndefined(value) && !isNull(value)) {
        if (!isFunction(value.toString)) {
            value = value.toString();
        }
    }
    return String(value);
}
exports.stringify = stringify;
