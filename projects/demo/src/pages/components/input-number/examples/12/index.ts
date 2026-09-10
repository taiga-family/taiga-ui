import {Component, inject, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

function intlThousandSeparatorPattern(
    locale: string = inject(LOCALE_ID),
): (digits: string) => readonly string[] {
    const formatter = new Intl.NumberFormat(locale, {maximumFractionDigits: 0});

    return (digits) => {
        if (!digits) {
            return [];
        }

        let position = 0;

        return formatter
            .formatToParts(BigInt(`1${'0'.repeat(digits.length - 1)}`))
            .filter(({type}) => type === 'integer')
            .map(({value}) => {
                const group = digits.slice(position, position + value.length);

                position += value.length;

                return group;
            });
    };
}

@Component({
    imports: [FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: LOCALE_ID, useValue: 'en-IN'}],
})
export default class Example {
    protected value: number | null = 123_456_789;

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        thousandSeparator: ',',
        thousandSeparatorPattern: intlThousandSeparatorPattern('en-IN'),
    };
}
