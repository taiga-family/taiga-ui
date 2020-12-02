/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 */
import { BaseException, logging } from '@angular-devkit/core';
import { Arguments, Option } from './interface';
export declare class ParseArgumentException extends BaseException {
    readonly comments: string[];
    readonly parsed: Arguments;
    readonly ignored: string[];
    constructor(comments: string[], parsed: Arguments, ignored: string[]);
}
/**
 * Parse the arguments in a consistent way, but without having any option definition. This tries
 * to assess what the user wants in a free form. For example, using `--name=false` will set the
 * name properties to a boolean type.
 * This should only be used when there's no schema available or if a schema is "true" (anything is
 * valid).
 *
 * @param args Argument list to parse.
 * @returns An object that contains a property per flags from the args.
 */
export declare function parseFreeFormArguments(args: string[]): Arguments;
/**
 * Parse the arguments in a consistent way, from a list of standardized options.
 * The result object will have a key per option name, with the `_` key reserved for positional
 * arguments, and `--` will contain everything that did not match. Any key that don't have an
 * option will be pushed back in `--` and removed from the object. If you need to validate that
 * there's no additionalProperties, you need to check the `--` key.
 *
 * @param args The argument array to parse.
 * @param options List of supported options. {@see Option}.
 * @param logger Logger to use to warn users.
 * @returns An object that contains a property per option.
 */
export declare function parseArguments(args: string[], options: Option[] | null, logger?: logging.Logger): Arguments;
