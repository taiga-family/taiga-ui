import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';

@Component({
    selector: `tui-format-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample3 {
    readonly items = [`USD`, `RUB`, `643`, `KZT`, `051`, `KRW`, `CHF`, `EUR`, `GBP`];

    parametersForm = new FormGroup({
        currency: new FormControl(null),
    });

    get currency(): string | null {
        const {currency} = this.parametersForm.value;

        return tuiGetCurrencySymbol(currency);
    }
}
