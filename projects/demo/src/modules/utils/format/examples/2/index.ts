import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyVariants, tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';

@Component({
    selector: 'tui-format-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample2 {
    readonly items = ['USD', 'RUB', '643', 'KZT', '051', 'KRW', 'CHF', 'EUR', 'GBP'];

    parametersForm = new UntypedFormGroup({
        currency: new UntypedFormControl(null),
    });

    get currency(): string | null {
        const {currency} = this.parametersForm.value;

        return tuiGetCurrencySymbol(currency as unknown as TuiCurrencyVariants);
    }
}
