/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {CHAR_PLUS} from '@taiga-ui/cdk';
import {tuiFormatPhone} from '@taiga-ui/core/utils/format';

@Pipe({
    standalone: true,
    name: 'tuiFormatPhone',
})
export class TuiFormatPhonePipe implements PipeTransform {
    /**
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
