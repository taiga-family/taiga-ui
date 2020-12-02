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
/**
 * @private
 */
export declare function isString(val: any): val is string;
/**
 * @private
 */
export declare function isNumber(val: any): val is number;
/**
 * @private
 */
export declare function isBoolean(val: any): val is boolean;
/**
 * @private
 */
export declare function isUndefined(val: any): val is undefined;
/**
 * @private
 */
export declare function isNull(val: any): val is null;
/**
 * @private
 */
export declare function isPrimitive(val: any): val is (string | number | boolean | undefined | null);
/**
 * @private
 */
export declare function isObject(val: any): val is Object;
/**
 * @private
 */
export declare function isArray(val: any): val is any[];
/**
 * @private
 */
export declare function isStringArray(val: any): val is string[];
/**
 * @private
 */
export declare function isFunction(val: any): val is Function;
/**
 * @private
 */
export declare function isSet(val: any): boolean;
/**
 * @private
 */
export declare function isMap(val: any): boolean;
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
export declare function stringify(value: any): string;
