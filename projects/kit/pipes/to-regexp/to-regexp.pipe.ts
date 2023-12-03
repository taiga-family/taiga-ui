import {Pipe, PipeTransform} from '@angular/core';
import {TuiArrayOrValue, tuiIsString, tuiToArray} from '@taiga-ui/cdk';

/**
 * Transforms a string or an array of strings into RegExp instances.
 */
@Pipe({
    name: `tuiToRegexp`,
})
export class TuiToRegexpPipe implements PipeTransform {
    /**
     * Transforms a string into a RegExp instance.
     * @param {string} value - The string to transform into a RegExp.
     * @param {string} [flags] - Optional flags to be applied to the RegExp.
     * @returns {RegExp} The transformed RegExp instance.
     */
    transform(value: string, flags?: string): RegExp;
    /**
     * Transforms an array of strings into an array of RegExp instances.
     * @param {readonly string[]} value - The array of strings to transform into RegExp instances.
     * @param {string} [flags] - Optional flags to be applied to the RegExp instances.
     * @returns {readonly RegExp[]} The transformed array of RegExp instances.
     */
    transform(value: readonly string[], flags?: string): readonly RegExp[];
    transform(
        value: TuiArrayOrValue<string>,
        flags: string = ``,
    ): TuiArrayOrValue<RegExp> {
        if (tuiIsString(value)) {
            return new RegExp(value, flags);
        }

        return tuiToArray(value).map(item => new RegExp(item, flags));
    }
}
