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
 * Replaces ampersands (&) with the appropriate XML character reference.
 *
 * @param str The string to escape.
 *
 * @returns A copy of the specified string with ampersands escaped.
 *
 * @private
 */
export declare function escapeAmpersands(str: string): string;
/**
 * Replaces left angle brackets (&lt;) with the appropriate XML character
 * reference.
 *
 * @param str The string to escape.
 *
 * @returns A copy of the specified string with left angle brackets escaped.
 *
 * @private
 */
export declare function escapeLeftAngleBrackets(str: string): string;
/**
 * Replaces right angle brackets (&gt;) with the appropriate XML character
 * reference when part of the string "]]>".
 *
 * @param str The string to escape.
 *
 * @returns A copy of the specified string with right angle brackets escaped
 *          when part of the string "]]>".
 *
 * @private
 */
export declare function escapeRightAngleBracketsInCdataTerminator(str: string): string;
/**
 * Replaces single quotes (") with the appropriate XML character reference.
 *
 * @param str The string to escape.
 *
 * @returns A copy of the specified string with single quotes escaped.
 *
 * @private
 */
export declare function escapeSingleQuotes(str: string): string;
/**
 * Replaces double quotes (") with the appropriate XML character reference.
 *
 * @param str The string to escape.
 *
 * @returns A copy of the specified string with double quotes escaped.
 *
 * @private
 */
export declare function escapeDoubleQuotes(str: string): string;
