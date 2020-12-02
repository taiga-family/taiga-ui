import {Pipe, PipeTransform} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {formatPhone} from '@taiga-ui/core/utils/format';

@Pipe({name: 'tuiFormatPhone'})
export class TuiFormatPhonePipe implements PipeTransform {
    /**
     * Форматирует строку с телефоном формата +7XXXXXXXXXX, добавляя скобки и дефисы
     * @param value строка для форматирования
     * @param countryCode код страны
     * @param phoneMask маска телефона
     * @return отформатированная строка телефона вида +7(XXX)XXX-XX-XX
     */
    transform(
        value: string,
        countryCode: string = '+7',
        phoneMask: string = '(###) ###-##-##',
    ): string {
        tuiAssert.assert(
            value !== undefined,
            'Undefined was passed to tuiFormatPhone pipe',
        );

        return formatPhone(value, countryCode, phoneMask);
    }
}
