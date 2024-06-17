import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrency} from '@taiga-ui/addon-commerce';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import type {MyAccount} from './account';
import {ExampleMyAccountComponent} from './account';

@Component({
    standalone: true,
    imports: [
        TuiSelectModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiDataListDirective,
        TuiDataListComponent,
        NgForOf,
        TuiOptionComponent,
        ExampleMyAccountComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly accounts: MyAccount[] = [
        {
            name: 'Dollar deposit',
            amount: 237000,
            currency: TuiCurrency.Dollar,
            paymentSystem: '@tui.visa',
        },
        {
            name: 'Pound deposit',
            amount: 100,
            currency: TuiCurrency.Pound,
            paymentSystem: '@tui.mastercard',
        },
        {
            name: 'Rouble deposit',
            amount: 1234567890,
            currency: TuiCurrency.Ruble,
            paymentSystem: '@tui.mir',
        },
    ];

    protected account = new FormControl(this.accounts[0]);
}
