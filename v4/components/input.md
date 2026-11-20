# Input

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use Textfield instead! Input &mdash; is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string Inputs for other types of data: `Textarea` — for multiline text `InputDate` — for dates `InputDateRange` — for a range of dates `InputNumber` — for number (with measurement postfix) `InputPhone` — for phone numbers `InputTag` — for input tags `InputRange` , `InputSlider` — for accurate number values `Slider` , `Range` — for not accurate number values

### How to Use (Import)

```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input formControlName="testValue">
    Type a text
    <input tuiTextfieldLegacy />
  </tui-input>
</form>
```

### Example

```html
<ng-template>
<tui-input [focusable]="focusable" [formControl]="control" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContent" [tuiTextfieldFiller]="filler" [tuiTextfieldIcon]="icon" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Label <strong>strong text</strong>
<input tuiTextfieldLegacy [placeholder]="placeholder" />
</tui-input>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| tuiTextfieldIcon | `PolymorpheusContent` | Icon content. If content is a string, it is used as stringified svg or a name of an icon |
| placeholder | `string` | Placeholder (use external '"> to set it) |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<tui-input formControlName="testValue"> Type an email <input tuiTextfieldLegacy type="email" />
</tui-input>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('mail@mail.ru'),
    });
}
```

#### sizes

**Template:**
```html
<form [formGroup]="testForm">
<p>
<tui-input formControlName="testValue" tuiTextfieldSize="s" [tuiTextfieldCleaner]="true" > Type an email <input autocomplete="email" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
<p>
<tui-input formControlName="testValue" tuiTextfieldSize="m" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > Type an email <input autocomplete="email" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
<p>
<tui-input formControlName="testValue" tuiTextfieldSize="m" [tuiTextfieldCleaner]="true" > Type an email <input autocomplete="email" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
<p>
<tui-input formControlName="testValue" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > Type an email <input autocomplete="email" placeholder="mail@mail.ru" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
<p>
<tui-input formControlName="testValue" tuiHintContent="It will be used for sending documents" [tuiTextfieldCleaner]="true" > Type an email <span class="tui-required"></span>
<input autocomplete="email" placeholder="mail@mail.ru" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiTextfield} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiHint,
        TuiInputModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('mail@mail.ru'),
    });
}
```

#### Mask

**Template:**
```html
<form [formGroup]="testForm">
<p>
<tui-input formControlName="testValue1" [maskito]="maskOptions1" > Document number <input inputmode="numeric" tuiTextfieldLegacy />
</tui-input>
</p>
<p>
<tui-input formControlName="testValue2" [maskito]="maskOptions2" [tuiUnmaskHandler]="unmask" > Secret number <input inputmode="numeric" tuiTextfieldLegacy />
</tui-input>
</p>
</form>
<p>Value stored in control:</p>
<pre>{{ testForm.value | json }}</pre>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {TuiUnmaskHandler} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        MaskitoDirective,
        ReactiveFormsModule,
        TuiInputModule,
        TuiUnmaskHandler,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(''),
        testValue2: new FormControl(''),
    });

    protected readonly maskOptions1: MaskitoOptions = {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    protected readonly maskOptions2: MaskitoOptions = {
        mask: [
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ],
    };

    protected readonly unmask = (value: string): string => value.replaceAll('-', '');
}
```

#### Autocomplete with dropdown

**Template:**
```html
<form class="container" [formGroup]="testForm" >
<tui-input *tuiLet="users$ | async as users" formControlName="user" [tuiTextfieldCustomContent]="content" > User <input placeholder="Type your name or surname" tuiTextfieldLegacy />
<ng-container *ngIf="users?.length">
<tui-data-list *tuiDataList>
<button *ngFor="let user of users" tuiOption type="button" [value]="user.toString()" (click)="onSelected(user)" > {{ user }} <tui-avatar size="xs" [src]="user.avatarUrl" > {{ user.toString() | tuiInitials }} </tui-avatar>
</button>
</tui-data-list>
</ng-container>
</tui-input>
<ng-template #avatar>
<tui-avatar *ngIf="lastUser" size="s" [src]="lastUser.avatarUrl" > {{ lastUser.toString() | tuiInitials }} </tui-avatar>
</ng-template>
<tui-input formControlName="account" class="tui-space_vertical-5" > Account <tui-data-list-wrapper *tuiDataList [itemContent]="accountContent" [items]="accounts" />
<ng-template #accountContent let-account >
<div> {{ account.name }} <span>{{ account.amount | tuiAmount: 'RUB' | async }}</span>
</div>
</ng-template>
</tui-input>
<tui-textfield>
<label tuiLabel>Card number</label>
<input formControlName="card" tuiInputCard [icon]="card" />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
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
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
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
```

**LESS:**
```less
.container {
    max-inline-size: 18rem;
}
```

#### Modes

**Template:**
```html
<form [formGroup]="testForm">
<p>
<tui-input formControlName="testValue" [tuiTextfieldCleaner]="true" > Type an email <input placeholder="mail@mail.ru" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
<div>
<p class="wrapper wrapper_dark">
<tui-input formControlName="testValue" tuiTheme="dark" [tuiTextfieldCleaner]="true" > Type an email <input placeholder="mail@mail.ru" tuiTextfieldLegacy type="email" />
</tui-input>
</p>
</div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputModule, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('mail@mail.ru'),
    });
}
```

**LESS:**
```less
.wrapper {
    padding: 0.75rem;

    &_dark {
        background-color: #30406a;
    }
}
```

#### Table

**Template:**
```html
<p>
<code>tuiTable</code> directive from <code>&#64;taiga-ui/addon-table</code>
</p>
<form tuiTextfieldSize="m" [formGroup]="form" [tuiTextfieldLabelOutside]="true" >
<table tuiTable class="table" >
<thead>
<tr>
<th tuiTh class="name" > Name </th>
<th tuiTh>Date</th>
<th tuiTh>Gender</th>
<th tuiTh>Quantity</th>
<th tuiTh>Sum, $</th>
</tr>
</thead>
<tbody>
<tr>
<td tuiTd>
<tui-input formControlName="name"> Name <input placeholder="Ivan Ivanov" tuiTextfieldLegacy />
</tui-input>
</td>
<td tuiTd>
<tui-input-date formControlName="date">Date</tui-input-date>
</td>
<td tuiTd>
<tui-textfield tuiChevron>
<select formControlName="color" placeholder="Color" tuiTextfield ></select>
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="items" />
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield>
<input formControlName="quantity" placeholder="Quantity" tuiInputNumber [tuiNumberFormat]="{precision: 0}" />
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield>
<input formControlName="sum" placeholder="Sum" tuiInputNumber [readOnly]="true" />
</tui-textfield>
</td>
</tr>
</tbody>
</table>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiInputNumber} from '@taiga-ui/kit';
import {
    TuiInputDateModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputDateModule,
        TuiInputModule,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTable,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Black', 'Gold', 'Silver'];
    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        date: new FormControl(null, Validators.required),
        color: new FormControl(null, Validators.required),
        quantity: new FormControl<number | null>(null),
        sum: new FormControl(255),
    });
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.table {
    inline-size: 40rem;
}

.name {
    inline-size: 10rem;
}
```

#### Check

**Template:**
```html
<tui-input tuiHintContent="Type 5 letters or more" [formControl]="control" [tuiTextfieldCleaner]="true" [tuiTextfieldCustomContent]="control.valid ? success : ''" > Hello </tui-input>
<ng-template #success>
<tui-icon icon="@tui.check" class="success tui-space_left-3" />
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiHint,
        TuiIcon,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', [
        Validators.required,
        Validators.minLength(5),
    ]);
}
```

**LESS:**
```less
.success {
    position: relative;
    color: var(--tui-text-positive);
    block-size: 1rem;
    inline-size: 1rem;
}
```

#### DataList

**Template:**
```html
<tui-input *tuiLet="items$ | async as items" [formControl]="control" > Enter your name <ng-container *ngIf="items?.length">
<tui-data-list *tuiDataList>
<button *ngFor="let item of items" tuiOption type="button" [disabled]="item.disabled" [value]="item" (click)="onClick(item)" >
<tui-avatar size="xs" class="avatar" [src]="item.avatarUrl" > {{ item.toString() | tuiInitials }} </tui-avatar>
<span class="name">{{ item }}</span>
</button>
</tui-data-list>
</ng-container>
</tui-input>
<p>Parsed on complete match:</p> {{ firstName }} {{ lastName }}
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_DEFAULT_MATCHER, TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {map, type Observable, of, startWith, switchMap} from 'rxjs';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly avatarUrl: string | null = null,
        public readonly disabled = false,
    ) {}

    public toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const DATA: readonly User[] = [
    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),
    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),
    new User('Gabriel José', 'de la Concordia «Gabo» García Márquez'),
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiAvatar,
        TuiDataList,
        TuiInitialsPipe,
        TuiInputModule,
        TuiLet,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('');

    protected firstName = '';
    protected lastName = '';

    protected readonly items$ = this.control.valueChanges.pipe(
        startWith(''),
        switchMap((value) =>
            this.request(value ?? '').pipe(
                map((response) => {
                    if (
                        response.length === 1 &&
                        response[0] &&
                        String(response[0]) === value
                    ) {
                        this.onClick(response[0]);

                        return [];
                    }

                    return response;
                }),
            ),
        ),
        startWith(DATA),
    );

    protected onClick({lastName, firstName}: User): void {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    // Request imitation
    private request(query: string): Observable<readonly User[]> {
        return of(DATA.filter((item) => TUI_DEFAULT_MATCHER(item, query)));
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.avatar {
    margin: 0 0.5rem 0 0;
    flex-shrink: 0;
}

.name {
    .text-overflow();

    flex-shrink: 1;
    margin-inline-end: auto;
}
```

#### Direction: RTL

**Template:**
```html
<tui-input tuiHintContent="لا يدعمه Safari أدناه 12.1" tuiHintDirection="bottom-right" tuiTextfieldIconLeft="@tui.search" class="input" [tuiTextfieldCleaner]="true" [(ngModel)]="value" > بحث <input placeholder="اكتب الاستعلام الخاص بك" tuiTextfieldLegacy />
</tui-input>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiTextfield} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiHint,
        TuiInputModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

**LESS:**
```less
.input {
    inline-size: 20rem;
    direction: rtl;
}
```

#### Disable browser autofill

**Template:**
```html
<form [formGroup]="testForm">
<tui-input formControlName="testValue"> Type an email <input autocomplete="email" translate="no" tuiTextfieldLegacy type="email" />
</tui-input>
</form>
<hr class="tui-space_top-4 t-hr" />
<h4> Preventing autofilling - <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password" rel="noreferrer" target="_blank" tuiLink > MDN </a>
</h4>
<tui-notification class="tui-space_vertical-4">
<code>autocomplete=off</code> is largely ignored in modern browsers - primarily due to password managers etc. </tui-notification>
<form [formGroup]="testForm">
<tui-input formControlName="testValue"> Type an email <input autocomplete="new-password" translate="no" tuiTextfieldLegacy type="email" />
</tui-input>
</form>
<tui-notification class="tui-space_top-4"> This is a hint, which browsers are not required to comply with. However modern browsers have stopped autofilling elements with <code>autocomplete="new-password"</code>
</tui-notification>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputModule, TuiLink, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(''),
    });
}
```

Custom align content by text-align
