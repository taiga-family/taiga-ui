import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrency} from '@taiga-ui/addon-commerce';

import type {MyAccount} from './account/my-account.component';

@Component({
    selector: `tui-select-example-9`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample9 {
    readonly accounts: MyAccount[] = [
        {
            name: `Dollar deposit`,
            amount: 237000,
            currency: TuiCurrency.Dollar,
            paymentSystem: `tuiIconVisa`,
        },
        {
            name: `Pound deposit`,
            amount: 100,
            currency: TuiCurrency.Pound,
            paymentSystem: `tuiIconMastercard`,
        },
        {
            name: `Rouble deposit`,
            amount: 1234567890,
            currency: TuiCurrency.Ruble,
            paymentSystem: `tuiIconMir`,
        },
    ];

    account = new FormControl(this.accounts[0]);
}
