/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {CHAR_PLUS} from '@taiga-ui/cdk/constants';
import {tuiFormatPhone} from '@taiga-ui/legacy/utils';

/**
 * @deprecated: drop in v5.0
 */
@Pipe({
    standalone: true,
    name: 'tuiFormatPhone',
})
export class TuiFormatPhonePipe implements PipeTransform {
    /**
     * Use {@link https://maskito.dev/frameworks/angular#pipe MaskitoPipe} instead!
     * ```ts
     * import {maskitoTransform} from '@maskito/core';
     * import {maskitoPhoneOptionsGenerator} from '@maskito/phone';
     * import metadata from 'libphonenumber-js/min/metadata';
     *
     * @Component({
     *     standalone: true,
     *     imports: [MaskitoPipe],
     *     template: `
     *         Phone: {{'12125552368' | maskito: options}}
     *         <!-- Phone: +1 (212) 555-2368 -->
     *     `,
     * })
     * export class YourComponent {
     *     options = maskitoPhoneOptionsGenerator({countryIsoCode: 'US', metadata});
     * }
     * ```
     * ___
     * @deprecated Use {@link https://maskito.dev/frameworks/angular#pipe MaskitoPipe} instead!
     * Formats phone number string of +7XXXXXXXXXX format with adding separator symbols
     * @param value
     * @param countryCode
     * @param phoneMask
     * @return formatted phone number string +7(XXX)XXX-XX-XX
     */
    public transform(
        value: string,
        countryCode = `${CHAR_PLUS}7`,
        phoneMask = '(###) ###-##-##',
    ): string {
        ngDevMode &&
            console.assert(
                value !== undefined,
                'Undefined was passed to tuiFormatPhone pipe',
            );

        return tuiFormatPhone(value, countryCode, phoneMask);
    }
}
