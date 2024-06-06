import type {PipeTransform} from '@angular/core';
import {Injectable, Pipe} from '@angular/core';
import type {TuiArrayOrValue} from '@taiga-ui/cdk';
import {tuiIsString, tuiToArray} from '@taiga-ui/cdk';

/**
 * Transforms a string or an array of strings into RegExp instances.
 */
@Injectable({
    providedIn: 'root',
})
@Pipe({
    standalone: true,
    name: 'tuiToRegexp',
})
export class TuiToRegexpPipe implements PipeTransform {
    /**
     * Transforms a string into a RegExp instance.
     * @param {string} value - The string to transform into a RegExp.
     * @param {string} [flags] - Optional flags to be applied to the RegExp.
     * @returns {RegExp} The transformed RegExp instance.
     */
    public transform(value: string, flags?: string): RegExp;
    /**
     * Transforms an array of strings into an array of RegExp instances.
     * @param {readonly string[]} value - The array of strings to transform into RegExp instances.
     * @param {string} [flags] - Optional flags to be applied to the RegExp instances.
     * @returns {readonly RegExp[]} The transformed array of RegExp instances.
     */
    public transform(value: readonly string[], flags?: string): readonly RegExp[];
    public transform(
        value: TuiArrayOrValue<string>,
        flags = '',
    ): TuiArrayOrValue<RegExp> {
        if (tuiIsString(value)) {
            return new RegExp(value, flags);
        }

        return tuiToArray(value).map(item => new RegExp(item, flags));
    }
}
