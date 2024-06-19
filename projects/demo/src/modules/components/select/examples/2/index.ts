import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe, TuiCurrency, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

class Card {
    constructor(
        protected readonly cardName: string,
        protected readonly cardNumber: string,
    ) {}
}

class Account {
    constructor(
        protected readonly id: string,
        protected readonly name: string,
        protected readonly amount: number,
        protected readonly currency: TuiCurrency,
    ) {}
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiSelectModule,
        TuiDataListWrapper,
        TuiDataList,
        TuiTextfieldControllerModule,
        TuiThumbnailCard,
        TuiAmountPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected cards = [
        new Card('Bitcoin', '*6713'),
        new Card('Money', '*4562'),
        new Card('Charity', '*6788'),
        new Card('Subscriptions', '*1231'),
    ];

    protected accounts = [
        new Account('1', 'RUB', 24876.55, TuiCurrency.Ruble),
        new Account('2', 'USD', 335, TuiCurrency.Dollar),
        new Account('3', 'EUR', 10000, TuiCurrency.Euro),
        new Account('4', 'PND', 100, TuiCurrency.Pound),
    ];

    protected testForm = new FormGroup({
        testValue: new FormControl(this.cards[0]),
        accounts: new FormControl(this.accounts[0]),
    });
}
