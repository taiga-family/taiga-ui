import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCurrency} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Account {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly amount: number,
        readonly currency: TuiCurrency,
        readonly cardSvg: string,
    ) {}
}

@Component({
    selector: `tui-form-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.style.less`],
    changeDetection,
})
export class TuiExample {
    readonly svgIcons = {
        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
    };

    persons = [new User(`Roman`, `Sedov`), new User(`Alex`, `Inkin`)];

    accounts = [
        new Account(`1`, `Common`, 24876.55, TuiCurrency.Ruble, this.svgIcons.common),
        new Account(`2`, `Universal`, 335, TuiCurrency.Dollar, this.svgIcons.universal),
        new Account(
            `3`,
            `Intersection`,
            10000,
            TuiCurrency.Euro,
            this.svgIcons.intersection,
        ),
        new Account(`4`, `Mutation`, 100, TuiCurrency.Pound, this.svgIcons.mutation),
    ];

    testForm = new UntypedFormGroup({
        nameValue: new UntypedFormControl(``, Validators.required),
        textValue: new UntypedFormControl(``, Validators.required),
        passwordValue: new UntypedFormControl(``, Validators.required),
        phoneValue: new UntypedFormControl(``, Validators.required),
        moneyValue: new UntypedFormControl(`100`, Validators.required),
        periodValue: new UntypedFormControl(new TuiDay(2017, 2, 15), Validators.required),
        timeValue: new UntypedFormControl(new TuiTime(12, 30), Validators.required),
        personValue: new UntypedFormControl(this.persons[0]),
        quantityValue: new UntypedFormControl(50_000, Validators.required),
        radioValue: new UntypedFormControl(`with-commission`),
        accountWherefrom: new UntypedFormControl(null),
        accountWhere: new UntypedFormControl(null),
        checkboxValue: new UntypedFormControl(false),
        osnoValue: new UntypedFormControl(false),
        usnValue: new UntypedFormControl(false),
        eshnValue: new UntypedFormControl(false),
        envdValue: new UntypedFormControl(false),
        usn2Value: new UntypedFormControl(false),
        patentValue: new UntypedFormControl(false),
    });
}
