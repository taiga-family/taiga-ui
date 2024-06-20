import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAmountPipe, TuiCurrency, TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiButton, TuiError, TuiGroupDirective, TuiLabel} from '@taiga-ui/core';
import {
    TuiBlock,
    TuiCheckbox,
    TuiDataListWrapper,
    TuiFieldErrorPipe,
    TuiRadio,
    TuiStepper,
} from '@taiga-ui/kit';
import {
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiInputSliderModule,
    TuiInputTimeModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

class User {
    constructor(
        protected readonly firstName: string,
        protected readonly lastName: string,
    ) {}

    protected toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Account {
    constructor(
        protected readonly id: string,
        protected readonly name: string,
        protected readonly amount: number,
        protected readonly currency: TuiCurrency,
        protected readonly cardSvg: string,
    ) {}
}

@Component({
    standalone: true,
    imports: [
        TuiStepper,
        ReactiveFormsModule,
        TuiInputModule,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe,
        TuiInputDateModule,
        TuiInputPasswordModule,
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
        TuiCurrencyPipe,
        TuiInputSliderModule,
        TuiSelectModule,
        TuiDataListWrapper,
        TuiInputPhoneModule,
        TuiGroupDirective,
        TuiBlock,
        TuiRadio,
        TuiInputTimeModule,
        TuiLabel,
        TuiCheckbox,
        TuiButton,
        TuiAmountPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected readonly svgIcons = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        intersection:
            'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    protected persons = [new User('Roman', 'Sedov'), new User('Alex', 'Inkin')];

    protected accounts = [
        new Account('1', 'Common', 24876.55, TuiCurrency.Ruble, this.svgIcons.common),
        new Account('2', 'Universal', 335, TuiCurrency.Dollar, this.svgIcons.universal),
        new Account(
            '3',
            'Intersection',
            10000,
            TuiCurrency.Euro,
            this.svgIcons.intersection,
        ),
        new Account('4', 'Mutation', 100, TuiCurrency.Pound, this.svgIcons.mutation),
    ];

    protected testForm = new FormGroup({
        nameValue: new FormControl('', Validators.required),
        textValue: new FormControl('', Validators.required),
        passwordValue: new FormControl('', Validators.required),
        phoneValue: new FormControl('', Validators.required),
        moneyValue: new FormControl('100', Validators.required),
        periodValue: new FormControl(new TuiDay(2017, 2, 15), Validators.required),
        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
        personValue: new FormControl(this.persons[0]),
        quantityValue: new FormControl(50_000, Validators.required),
        radioValue: new FormControl('with-commission'),
        accountWherefrom: new FormControl<Account | null>(null),
        accountWhere: new FormControl<Account | null>(null),
        checkboxValue: new FormControl(false),
        osnoValue: new FormControl(true),
        usnValue: new FormControl(false),
        eshnValue: new FormControl(false),
        envdValue: new FormControl(false),
    });
}
