import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiAmountPipe, TuiCurrency, TuiInputCard} from '@taiga-ui/addon-commerce';
import {TUI_DEFAULT_MATCHER, tuiControlValue, TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiInitialsPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiAvatar, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {map} from 'rxjs';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly avatarUrl: string | null = null,
        public readonly accounts: Account[] = [],
        public readonly card = '',
    ) {}

    public toString(): string {
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

    protected toString(): string {
        return this.name;
    }
}

const accountsRoman = [
    new Account(
        '1',
        'RUB',
        24876.55,
        TuiCurrency.Ruble,
        'https://ng-web-apis.github.io/dist/assets/images/common.svg',
    ),
    new Account(
        '2',
        'USD',
        335,
        TuiCurrency.Dollar,
        'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg',
    ),
];
const accountsAlex = [
    new Account(
        '3',
        'EUR',
        10000,
        TuiCurrency.Euro,
        'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',
    ),
    new Account(
        '4',
        'PND',
        100,
        TuiCurrency.Pound,
        'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg',
    ),
];
const USERS = [
    new User(
        'Roman',
        'Sedov',
        'https://avatars.githubusercontent.com/u/10106368',
        accountsRoman,
    ),
    new User(
        'Alex',
        'Inkin',
        assets`/images/avatar.jpg`,
        accountsAlex,
        '1234123412341234',
    ),
    new User('Dmitriy', 'Demenskiy'),
    new User('Evgeniy', 'Mamaev'),
    new User('Ivan', 'Ishmametiev'),
    new User('Igor', 'Katsuba'),
    new User('Yulia', 'Tsareva'),
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiDataList,
        TuiDataListWrapper,
        TuiInitialsPipe,
        TuiInputCard,
        TuiInputModule,
        TuiLet,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('avatar')
    private readonly avatar: PolymorpheusContent;

    private readonly user = new FormControl('');

    protected readonly testForm = new FormGroup({
        user: this.user,
        account: new FormControl(''),
        card: new FormControl(''),
    });

    protected lastUser: User | null = null;

    protected readonly users$ = tuiControlValue<string>(this.user).pipe(
        map((value) => {
            const filtered = USERS.filter((user) => TUI_DEFAULT_MATCHER(user, value));

            if (
                filtered.length !== 1 ||
                String(filtered[0]).toLowerCase() !== value.toLowerCase()
            ) {
                return filtered;
            }

            if (filtered[0]) {
                this.onSelected(filtered[0]);
            }

            return [];
        }),
    );

    protected get card(): string | null {
        const {value} = this.testForm.get('card')!;

        if ((value?.length ?? 0) < 7) {
            return null;
        }

        switch (value?.charAt(0)) {
            case '0':
            case '1':
            case '2':
                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';
            case '3':
            case '4':
            case '5':
                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';
            case '6':
            case '7':
                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';
            case '8':
            case '9':
            default:
                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';
        }
    }

    protected get isUserSelected(): boolean {
        return (
            this.lastUser !== null &&
            this.lastUser.toString().toLowerCase() ===
                this.testForm.get('user')?.value?.toLowerCase()
        );
    }

    protected get content(): PolymorpheusContent {
        return this.avatar && this.isUserSelected ? this.avatar : '';
    }

    protected get accounts(): Account[] {
        return this.isUserSelected ? this.lastUser?.accounts || [] : [];
    }

    protected onSelected(user: User): void {
        this.lastUser = user;
        this.testForm.get('card')!.setValue(user.card);
    }
}
