import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
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

    testForm = new FormGroup({
        accountWhere: new FormControl(null),
        accountWherefrom: new FormControl(null),
        checkboxValue: new FormControl(false),
        envdValue: new FormControl(false),
        eshnValue: new FormControl(false),
        moneyValue: new FormControl(`100`, Validators.required),
        nameValue: new FormControl(``, Validators.required),
        osnoValue: new FormControl(false),
        passwordValue: new FormControl(``, Validators.required),
        patentValue: new FormControl(false),
        periodValue: new FormControl(new TuiDay(2017, 2, 15), Validators.required),
        personValue: new FormControl(this.persons[0]),
        phoneValue: new FormControl(``, Validators.required),
        quantityValue: new FormControl(50_000, Validators.required),
        radioValue: new FormControl(`with-commission`),
        textValue: new FormControl(``, Validators.required),
        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
        usn2Value: new FormControl(false),
        usnValue: new FormControl(false),
    });
}
