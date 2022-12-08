import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiCurrency} from '@taiga-ui/addon-commerce';
import {TUI_DEFAULT_MATCHER, tuiControlValue} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {map} from 'rxjs/operators';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
        readonly accounts: Account[] = [],
        readonly card: string = ``,
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

    toString(): string {
        return this.name;
    }
}

const accountsRoman = [
    new Account(
        `1`,
        `RUB`,
        24876.55,
        TuiCurrency.Ruble,
        `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
    ),
    new Account(
        `2`,
        `USD`,
        335,
        TuiCurrency.Dollar,
        `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`,
    ),
];
const accountsAlex = [
    new Account(
        `3`,
        `EUR`,
        10000,
        TuiCurrency.Euro,
        `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
    ),
    new Account(
        `4`,
        `PND`,
        100,
        TuiCurrency.Pound,
        `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`,
    ),
];
const USERS = [
    new User(`Roman`, `Sedov`, `https://avatars.githubusercontent.com/u/10106368`, accountsRoman),
    new User(
        `Alex`,
        `Inkin`,
        assets`/images/avatar.jpg`,
        accountsAlex,
        `1234123412341234`,
    ),
    new User(`Dmitriy`, `Demenskiy`),
    new User(`Evgeniy`, `Mamaev`),
    new User(`Ivan`, `Ishmametiev`),
    new User(`Igor`, `Katsuba`),
    new User(`Yulia`, `Tsareva`),
];

@Component({
    selector: `tui-input-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputExample4 {
    @ViewChild(`avatar`)
    private readonly avatar: PolymorpheusContent = ``;

    private readonly user = new FormControl(``);

    readonly testForm = new FormGroup({
        user: this.user,
        account: new FormControl(``),
        card: new FormControl(``),
    });

    lastUser: User | null = null;

    readonly users$ = tuiControlValue<string>(this.user).pipe(
        map(value => {
            const filtered = USERS.filter(user => TUI_DEFAULT_MATCHER(user, value));

            if (
                filtered.length !== 1 ||
                String(filtered[0]).toLowerCase() !== value.toLowerCase()
            ) {
                return filtered;
            }

            this.onSelected(filtered[0]);

            return [];
        }),
    );

    get card(): string | null {
        const value = this.testForm.get(`card`)!.value;

        if ((value?.length ?? 0) < 7) {
            return null;
        }

        switch (value?.charAt(0)) {
            case `0`:
            case `1`:
            case `2`:
                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;
            case `3`:
            case `4`:
            case `5`:
                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;
            case `6`:
            case `7`:
                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;
            case `8`:
            case `9`:
            default:
                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;
        }
    }

    get isUserSelected(): boolean {
        return (
            this.lastUser !== null &&
            this.lastUser.toString().toLowerCase() ===
                this.testForm.get(`user`)?.value?.toLowerCase()
        );
    }

    get content(): PolymorpheusContent {
        return this.avatar && this.isUserSelected ? this.avatar : ``;
    }

    get accounts(): Account[] {
        return this.isUserSelected ? this.lastUser?.accounts || [] : [];
    }

    onSelected(user: User): void {
        this.lastUser = user;
        this.testForm.get(`card`)!.setValue(user.card);
    }
}
