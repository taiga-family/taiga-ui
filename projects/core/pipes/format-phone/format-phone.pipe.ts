import {Pipe, PipeTransform} from '@angular/core';
import {CHAR_PLUS, tuiAssert} from '@taiga-ui/cdk';
import {formatPhone} from '@taiga-ui/core/utils/format';

@Pipe({name: `tuiFormatPhone`})
export class TuiFormatPhonePipe implements PipeTransform {
    /**
     * Formats phone number string of +7XXXXXXXXXX fomrat with adding separator symbols
     * @param value
     * @param countryCode
     * @param phoneMask
     * @return formatted phone number string +7(XXX)XXX-XX-XX
     */
    transform(
        value: string,
        countryCode: string = `${CHAR_PLUS}7`,
        phoneMask: string = `(###) ###-##-##`,
    ): string {
        tuiAssert.assert(
            value !== undefined,
            `Undefined was passed to tuiFormatPhone pipe`,
        );

        return formatPhone(value, countryCode, phoneMask);
    }
}
