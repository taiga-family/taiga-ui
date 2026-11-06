# SelectLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of Select instead! `Select` is a field with dropdown to choose one item.

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-select formControlName="testValue">
    <tui-data-list-wrapper
      *tuiDataList
      [items]="items"
    ></tui-data-list-wrapper>
  </tui-select>
</form>
```

### Example

```html
<ng-template>
<tui-select [focusable]="focusable" [formControl]="control" [identityMatcher]="identityMatcher" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContent" [tuiTextfieldFiller]="filler" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" [valueContent]="valueContent" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Choose an account <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-select>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| identityMatcher | `TuiIdentityMatcher` | Function that matches value and items, e.g. if objects are copied. Uses === by default. Must be a pure function |
| valueContent | `PolymorpheusContent<TuiValueContentContext<T>>` | >" [documentationPropertyValues]="valueTemplateVariants" [(documentationPropertyValue)]="selectedValueTemplate" > A template for custom view of selected value |

### Usage Examples

#### String array

**Template:**
```html
<form>
<tui-select tuiTextfieldSize="s" [formControl]="testValue" > Character <input placeholder="Choose your hero" tuiTextfieldLegacy />
<tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-select>
<tui-select tuiTextfieldSize="m" class="tui-space_vertical-4" [formControl]="testValue" [tuiTextfieldLabelOutside]="true" > Character <input placeholder="Choose your hero" tuiTextfieldLegacy />
<tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-select>
<tui-select [formControl]="testValue"> Character <input placeholder="Choose your hero" tuiTextfieldLegacy />
<tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-select>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected testValue = new FormControl<string | null>(null);
}
```

#### Custom template

**Template:**
```html
<form class="form" [formGroup]="testForm" >
<tui-select formControlName="testValue" [valueContent]="cardContent" > Choose a card <tui-data-list-wrapper *tuiDataList [itemContent]="cardContent" [items]="cards" />
</tui-select>
<tui-select formControlName="testValue" class="tui-space_vertical-5" [tuiTextfieldLabelOutside]="true" [valueContent]="cardContent" > Choose a card <tui-data-list-wrapper *tuiDataList [itemContent]="cardContent" [items]="cards" />
</tui-select>
<tui-select formControlName="accounts" [tuiTextfieldLabelOutside]="true" [valueContent]="accountContent" > Choose an account <tui-data-list-wrapper *tuiDataList [itemContent]="accountContent" [items]="accounts" />
</tui-select>
<ng-template #cardContent let-item >
<div class="card-item">
<tui-thumbnail-card paymentSystem="mastercard" size="s" class="card" > {{ item.cardNumber.slice(1) }} </tui-thumbnail-card>
<span class="card-name">{{ item.cardName }}</span>
<span class="card-number">{{ item.cardNumber }}</span>
</div>
</ng-template>
<ng-template #accountContent let-account >
<div class="account"> {{ account.name }} <span>{{ account.amount | tuiAmount: 'RUB' | async }}</span>
</div>
</ng-template>
</form>
```

**TypeScript:**
```ts
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
        AsyncPipe,
        ReactiveFormsModule,
        TuiAmountPipe,
        TuiDataList,
        TuiDataListWrapper,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiThumbnailCard,
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
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.form {
    max-inline-size: 25rem;
}

.account-item,
.card-item {
    display: flex;
    flex: 1;
    align-items: center;
    min-inline-size: 0;
}

.account-item {
    block-size: 4rem;
}

.account {
    display: flex;
    flex: 1;
    justify-content: space-between;
}

.card {
    background-color: var(--tui-chart-categorical-05);
}

.card-name {
    .text-overflow();

    margin: 0 0.5rem;
    min-inline-size: 0;
    flex: 1 1 0;
}

.card-number {
    margin-inline-start: auto;
    color: var(--tui-text-secondary);
}

.icon {
    inline-size: 1.5rem;
}

.account-currency {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-end: 0.5rem;
    inline-size: 2.25rem;
    block-size: 2.25rem;
    border-radius: 100%;
    background-color: var(--tui-background-base);
    font-weight: bold;
}

.account-card {
    margin-inline-start: auto;
    flex-shrink: 0;
}

.account-name {
    font: var(--tui-font-text-s);
    color: var(--tui-text-tertiary);
}

.account-value {
    font: var(--tui-font-text-m);
}
```

#### Item delegate

**Template:**
```html
<form class="wrapper" [formGroup]="testForm" >
<label> What is your address? <tui-select formControlName="email" class="tui-space_bottom-4" [tuiTextfieldLabelOutside]="true" > Choose an address <tui-data-list *tuiDataList>
<button *ngIf="!signatureVisible" tuiOption type="button" class="link" (click)="toggle()" >
<tui-icon icon="@tui.circle-plus" class="icon" /> Add signature </button>
<button *ngFor="let item of items" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</tui-select>
</label>
<ng-container *ngIf="signatureVisible">
<tui-textarea formControlName="signature" tuiAutoFocus tuiTextfieldSize="m" class="tui-space_bottom-4" > Type a signature </tui-textarea>
<button size="m" tuiButton type="button" (click)="toggle()" > Hide signature </button>
</ng-container>
</form>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiIcon} from '@taiga-ui/core';
import {
    TuiSelectModule,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiDataList,
        TuiIcon,
        TuiSelectModule,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'https://twitter.com/marsibarsi',
        'https://twitter.com/waterplea',
    ];

    protected readonly testForm = new FormGroup({
        email: new FormControl<string | null>(null),
        signature: new FormControl(''),
    });

    protected signatureVisible = false;

    protected toggle(): void {
        this.signatureVisible = !this.signatureVisible;
    }
}
```

**LESS:**
```less
.wrapper {
    inline-size: 18.75rem;
}

.link {
    color: var(--tui-text-action);

    &:hover {
        color: var(--tui-text-action-hover);
    }
}

.icon {
    margin-inline-end: 0.5rem;
}
```

#### DataList

**Template:**
```html
<tui-select #select [(ngModel)]="value" > Select user <tui-data-list *tuiDataList>
<tui-opt-group label="Monty Python">
<button *ngFor="let python of pythons" tuiOption type="button" [value]="python" > {{ python }} </button>
</tui-opt-group>
<tui-opt-group label="Open-source squad">
<button tuiOption type="button" value="Alexander Inkin" > Alexander Inkin </button>
<button tuiOption type="button" value="Roman Sedov" > Roman Sedov </button>
</tui-opt-group>
<button tuiOption type="button" class="more" (click)="addMore(select)" >
<tui-icon icon="@tui.circle-plus" class="tui-space_right-2" /> Add more </button>
</tui-data-list>
</tui-select>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiDataList, TuiIcon} from '@taiga-ui/core';
import {type TuiSelectComponent, TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiDataList, TuiIcon, TuiSelectModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly pythons = [
        'de la Concordia «Gabo» García Márquez',
        ...inject<readonly string[]>('Pythons' as any),
    ];

    protected value = this.pythons[0]!;

    protected addMore(select: TuiSelectComponent<unknown>): void {
        select.handleOption(select.value);
        this.alerts.open('Add more is clicked').subscribe();
    }
}
```

**LESS:**
```less
:host {
    display: block;
}

.more {
    color: var(--tui-text-action);

    &:focus {
        color: var(--tui-text-action-hover);
    }
}
```

#### ID only

**Template:**
```html
<tui-select *tuiLet="items$ | async as items" [tuiTextfieldLabelOutside]="true" [valueContent]="items ? stringify(items) : loading" [(ngModel)]="value" >
<ng-template tuiDataList>
<tui-data-list *ngIf="items; else loading">
<button *ngFor="let item of items" tuiOption type="button" [value]="item.id" > {{ item.name }} </button>
</tui-data-list>
</ng-template>
<ng-template #loading>
<tui-loader class="tui-space_vertical-3 loader" />
</ng-template>
</tui-select>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext, TuiLet, tuiPure, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataList, TuiLoader} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {delay, of} from 'rxjs';

interface Python {
    readonly id: number;
    readonly name: string;
}

const ITEMS: readonly Python[] = [
    {id: 42, name: 'John Cleese'},
    {id: 237, name: 'Eric Idle'},
    {id: 666, name: 'Michael Palin'},
    {id: 123, name: 'Terry Gilliam'},
    {id: 777, name: 'Terry Jones'},
    {id: 999, name: 'Graham Chapman'},
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        TuiDataList,
        TuiLet,
        TuiLoader,
        TuiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 42;

    // Server request for items imitation
    protected readonly items$ = of(ITEMS).pipe(delay(3000));

    @tuiPure
    protected stringify(items: readonly Python[]): TuiStringHandler<TuiContext<number>> {
        const map = new Map(items.map(({id, name}) => [id, name] as [number, string]));

        return ({$implicit}: TuiContext<number>) => map.get($implicit) || '';
    }
}
```

**LESS:**
```less
:host {
    display: block;
}

.loader {
    flex: 1;
}

.more {
    color: var(--tui-text-action);

    &:focus {
        color: var(--tui-text-action-hover);
    }
}
```

#### DataListWrapper

**Template:**
```html
<tui-select *tuiLet="items$ | async as items" [(ngModel)]="value" > Select user <tui-data-list-wrapper *tuiDataList size="l" [disabledItemHandler]="disabledItemHandler" [itemContent]="content" [items]="items" />
</tui-select>
<ng-template #content let-data >
<div class="template">
<tui-avatar size="xs" class="avatar" [src]="data.avatarUrl || (data.toString() | tuiInitials)" />
<div class="name">{{ data }}</div>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {type TuiBooleanHandler, TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';
import {delay, of} from 'rxjs';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly avatarUrl: string | null = null,
    ) {}

    public toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: readonly User[] = [
    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),
    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),
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
        FormsModule,
        TuiAvatar,
        TuiDataList,
        TuiDataListWrapper,
        TuiInitialsPipe,
        TuiLet,
        TuiSelectModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly items$ = of(databaseMockData).pipe(delay(5000));

    protected readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) =>
        !!avatarUrl;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.template {
    display: flex;
    align-items: center;
}

.avatar {
    margin: 0 0.5rem 0 0;
    flex-shrink: 0;
}

.name {
    .text-overflow();

    flex-shrink: 1;
}
```

#### Complex dropdown

**Template:**
```html
<tui-select [valueContent]="content" [(ngModel)]="value" > Bank and account <ng-template tuiDataList>
<tui-data-list>
<tui-opt-group>
<button tuiOption type="button" [value]="all" > All </button>
</tui-opt-group>
<tui-opt-group label="Best bank">
<tui-opt-group tuiMultiSelectGroup>
<button *ngFor="let item of bank" tuiOption type="button" [value]="item" >
<span tuiTitle> {{ item.name }} <span tuiSubtitle>{{ item.account }}</span>
</span>
</button>
</tui-opt-group>
</tui-opt-group>
<tui-opt-group label="Other banks">
<tui-opt-group tuiMultiSelectGroup>
<button *ngFor="let item of others" tuiOption type="button" [value]="item" >
<span tuiTitle> {{ item.name }} <span tuiSubtitle>{{ item.account }}</span>
</span>
</button>
</tui-opt-group>
</tui-opt-group>
<tui-opt-group tuiMultiSelectGroup>
<button tuiOption type="button" [value]="cash" > Cash </button>
</tui-opt-group>
</tui-data-list>
</ng-template>
</tui-select>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataList, TuiTitle, type TuiValueContentContext} from '@taiga-ui/core';
import {TuiMultiSelectModule, TuiSelectModule} from '@taiga-ui/legacy';

interface Account {
    readonly account: string;
    readonly name: string;
}

const BANK: readonly Account[] = [
    {
        name: 'Ruble',
        account: '1234567890987654321',
    },
    {
        name: 'Dollar',
        account: '1234567890987654321',
    },
];

const OTHERS: readonly Account[] = [
    {
        name: 'Bank',
        account: '1234567890987654321',
    },
    {
        name: 'Other bank',
        account: '1234567890987654321',
    },
    {
        name: 'Bank of America',
        account: '1234567890987654321',
    },
];

const CASH: Account = {
    name: 'Cash',
    account: '',
};

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiDataList,
        TuiMultiSelectModule,
        TuiSelectModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = EMPTY_ARRAY;

    protected readonly all = EMPTY_ARRAY;
    protected readonly cash = CASH;
    protected readonly bank = BANK;
    protected readonly others = OTHERS;

    protected readonly content: TuiStringHandler<
        TuiValueContentContext<readonly unknown[]>
    > = ({$implicit: {length}}) => (length ? `${length} accounts` : 'All');
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

label {
    cursor: pointer;
}
```

#### Virtual scroll

You can use `Select` with `ScrollingModule` from @angular/cdk/scrolling .

**Template:**
```html
<tui-select [(ngModel)]="value"> Country <cdk-virtual-scroll-viewport *tuiDataList appendOnly tuiScrollable class="scroll" [itemSize]="44" >
<tui-data-list>
<button *cdkVirtualFor="let item of countries" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</tui-select>
```

**TypeScript:**
```ts
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiScrollable} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        FormsModule,
        TuiDataList,
        TuiScrollable,
        TuiSelectModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bonaire, Sint Eustatius and Saba',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Curaçao',
        'Cyprus',
        'Czechia',
        "Côte d'Ivoire",
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Falkland Islands',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and McDonald Islands',
        'Holy See',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea',
        'Kuwait',
        'Kyrgyzstan',
        "Lao People's Democratic Republic",
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine, State of',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Republic of North Macedonia',
        'Romania',
        'Russian Federation',
        'Rwanda',
        'Réunion',
        'Saint Barthélemy',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Martin',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Sint Maarten (Dutch part)',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Viet Nam',
        'Virgin Islands (British)',
        'Virgin Islands (U.S.)',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
        'Åland Islands',
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.scroll {
    .scrollbar-hidden();

    block-size: 12.5rem;
}
```

#### Accounts list

**Template:**
```html
<div class="example">
<tui-select tuiTextfieldSize="l" [formControl]="account" [tuiTextfieldLabelOutside]="true" [valueContent]="value" >
<ng-template tuiDataList>
<tui-data-list>
<button *ngFor="let item of accounts" tuiOption type="button" [value]="item" >
<my-account [account]="item" />
</button>
</tui-data-list>
</ng-template>
</tui-select>
<tui-select tuiTextfieldSize="m" class="tui-space_top-2" [formControl]="account" [tuiTextfieldLabelOutside]="true" [valueContent]="value" >
<ng-template tuiDataList>
<tui-data-list>
<button *ngFor="let item of accounts" tuiOption type="button" [value]="item" >
<my-account [account]="item" />
</button>
</tui-data-list>
</ng-template>
</tui-select>
</div>
<ng-template #value let-account >
<my-account [account]="account" />
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrency} from '@taiga-ui/addon-commerce';
import {TuiDataList} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ExampleMyAccount, type MyAccount} from './account';

@Component({
    standalone: true,
    imports: [
        ExampleMyAccount,
        NgForOf,
        ReactiveFormsModule,
        TuiDataList,
        TuiSelectModule,
        TuiTextfieldControllerModule,
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
```

**LESS:**
```less
.example {
    max-inline-size: 25rem;
}
```

#### Options (stringify)

**Template:**
```html
<form>
<tui-select tuiTextfieldSize="m" [formControl]="testValue" [tuiTextfieldLabelOutside]="true" > Employee <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-select>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, tuiItemsHandlersProvider} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Employee {
    readonly dept: {
        readonly id: number;
        readonly title: string;
    };
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            stringify: (item: Employee) => `${item.name} (${item.dept.title})`,
        }),
    ],
})
export default class Example {
    protected readonly testValue = new FormControl<Employee | null>(null);

    protected readonly items: readonly Employee[] = [
        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},
        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},
        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},
        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},
        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},
        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},
    ];
}
```

#### Native select

**Template:**
```html
<form>
<tui-select [formControl]="itemStringControl" [tuiTextfieldCleaner]="true" > Character <select placeholder="Select character" tuiSelect [items]="items" ></select>
</tui-select>
<tui-select class="tui-space_top-4" [formControl]="itemGroupControl" [tuiTextfieldCleaner]="true" > Food <select placeholder="Select food" tuiSelect [disabledItemHandler]="disabledItemHandler" [items]="groupItems" [labels]="labels" ></select>
<input placeholder="Make a choice" tuiTextfieldLegacy />
</tui-select>
<tui-select class="tui-space_top-4" [formControl]="itemControl" [stringify]="stringify" > Character <select placeholder="Select character" tuiSelect [items]="customItems" ></select>
</tui-select>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Item {
    id: number;
    name: string;
}

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiSelectModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected itemStringControl = new FormControl<string | null>(null);
    protected itemGroupControl = new FormControl<string | null>(null);
    protected itemControl = new FormControl<Item | null>(null);

    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected groupItems = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected customItems: readonly Item[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected labels = ['Salad', 'Soup'];

    protected stringify: TuiStringHandler<Item> = (item) => item.name;

    protected disabledItemHandler: TuiBooleanHandler<string> = (item) =>
        item.startsWith('Chicken');
}
```

Set a value with copied object from items to check
`identityMatcher`
:
