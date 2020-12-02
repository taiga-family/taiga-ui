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
export declare function isObject(val: any): val is object;
/**
 * @private
 */
export declare function isArray(val: any): val is any[];
/**
 * @private
 */
export declare function isInteger(value: any): boolean;
/**
 * Retrieve the Unicode code point at the specified index in the specified
 * string.
 *
 * @param str The string from which to retrieve the Unicode code point.
 * @param index The specified index.
 *
 * @returns The Unicode code point at the specified position.
 *
 * @private
 */
export declare function getCodePoint(str: string, index: number): number;
