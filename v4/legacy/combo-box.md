# ComboBoxLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of ComboBox instead! `ComboBox` is a textfield with a dropdown with items. You can choose one of available options or input a value manually.

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-combo-box formControlName="testValue">
    <tui-data-list-wrapper
      *tuiDataList
      [items]="items"
    ></tui-data-list-wrapper>
  </tui-combo-box>
</form>
```

### Example

```html
<ng-template>
<tui-combo-box [focusable]="focusable" [formControl]="control" [identityMatcher]="identityMatcher" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [strict]="strict" [strictMatcher]="strictMatcher" [stringify]="stringify" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldFiller]="filler" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" [valueContent]="valueContent" [(search)]="search" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Choose an account <tui-data-list-wrapper *tuiDataList [items]="filter(search)" />
</tui-combo-box>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | ) |
| [(search)] | `string | null` | when item from list selected) |
| [identityMatcher] | `TuiIdentityMatcher` |  |
| [strict] | `boolean` |  |
| [strictMatcher] | `TuiStringMatcher | null` |  |
| [stringify] | `TuiStringHandler` |  |
| [valueContent] | `PolymorpheusContent` | A template for custom view of selected value |

```ts
import {FormControl, FormGroup} from '@angular/forms';

// ...

@Component({
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```

### Usage Examples

#### Async data loading

**Template:**
```html
<form *tuiLet="items$ | async as items" [tuiTextfieldCleaner]="true" >
<tui-combo-box tuiTextfieldSize="s" [formControl]="testValue" [valueContent]="content" (searchChange)="onSearchChange($event)" > Find the best employees <input placeholder="Type a name" tuiTextfieldLegacy (input)="onSearchChange(extractValueFromEvent($event))" />
<tui-data-list-wrapper *tuiDataList [itemContent]="content" [items]="items" />
</tui-combo-box>
<tui-combo-box tuiTextfieldSize="m" class="tui-space_vertical-5" [formControl]="testValue" [valueContent]="content" > Find the best employees <input placeholder="Type a name" tuiTextfieldLegacy (input)="onSearchChange(extractValueFromEvent($event))" />
<tui-data-list-wrapper *tuiDataList [itemContent]="content" [items]="items" />
</tui-combo-box>
<tui-combo-box [formControl]="testValue" [valueContent]="content" > Choose a developer <input placeholder="Type a name" tuiTextfieldLegacy (input)="onSearchChange(extractValueFromEvent($event))" />
<tui-data-list-wrapper *tuiDataList [itemContent]="content" [items]="items" />
</tui-combo-box>
</form>
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
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_DEFAULT_MATCHER, TuiLet} from '@taiga-ui/cdk';
import {TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {delay, filter, type Observable, of, startWith, Subject, switchMap} from 'rxjs';

class User {
    constructor(
        protected readonly firstName: string,
        protected readonly lastName: string,
        protected readonly avatarUrl: string | null = null,
    ) {}

    protected toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: readonly User[] = [
    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),
    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAvatar,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiInitialsPipe,
        TuiLet,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly search$ = new Subject<string | null>();

    protected readonly items$: Observable<readonly User[] | null> = this.search$.pipe(
        filter((value) => value !== null),
        switchMap((search) =>
            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),
        ),
        startWith(databaseMockData),
    );

    protected readonly testValue = new FormControl(databaseMockData[1]);

    protected onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    protected extractValueFromEvent(event: Event): string | null {
        return (event.target as HTMLInputElement)?.value || null;
    }

    /**
     * Service request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {
        const result = databaseMockData.filter((user) =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ''),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
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

#### DataList

**Template:**
```html
<label> Type a name: <tui-combo-box *tuiLet="service.request(search) | async as filtered" [formControl]="control" [tuiTextfieldLabelOutside]="true" [valueContent]="value" [(search)]="search" > Find the best employees <input placeholder="Type a name" tuiTextfieldLegacy />
<ng-template #value let-item >
<tui-avatar size="xs" class="avatar" [src]="item.avatarUrl" > {{ item.toString() | tuiInitials }} </tui-avatar>
<span class="name">{{ item }}</span>
</ng-template>
<ng-template tuiDataList>
<tui-data-list *ngIf="filtered; else loading">
<button *ngFor="let item of filtered" tuiOption type="button" [disabled]="item.disabled" [value]="item" >
<tui-avatar size="xs" class="avatar" [src]="item.avatarUrl" > {{ item.toString() | tuiInitials }} </tui-avatar>
<span class="name">{{ item }}</span>
</button>
</tui-data-list>
<ng-template #loading>
<tui-loader class="tui-space_vertical-4" />
</ng-template>
</ng-template>
</tui-combo-box>
</label>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiInitialsPipe, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {databaseMockData} from './database-mock-data';
import {RequestService} from './request.service';

@Component({
    standalone: true,
    selector: 'tui-combo-box-example-2',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiAvatar,
        TuiComboBoxModule,
        TuiDataList,
        TuiInitialsPipe,
        TuiLet,
        TuiLoader,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [RequestService],
})
export default class Example {
    protected readonly service = inject(RequestService);

    protected search: string | null = '';

    protected readonly control = new FormControl(databaseMockData[0]);
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
}
```

#### DataListWrapper

**Template:**
```html
<tui-combo-box [(ngModel)]="value"> Find the best employees <input placeholder="Type a name" tuiTextfieldLegacy />
<tui-data-list-wrapper *tuiDataList [items]="items | tuiFilterByInput" />
</tui-combo-box>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiComboBoxModule, TuiDataListWrapper, TuiFilterByInputPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected value = '';
}
```

#### Stringify

**Template:**
```html
<tui-combo-box [stringify]="stringify" [(ngModel)]="value" > Find the best employees <input placeholder="Type a name" tuiTextfieldLegacy />
<tui-data-list-wrapper *tuiDataList [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
</tui-combo-box>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly items = [
        {name: 'John', surname: 'Cleese'},
        {name: 'Eric', surname: 'Idle'},
        {name: 'Graham', surname: 'Chapman'},
        {name: 'Michael', surname: 'Palin'},
        {name: 'Terry', surname: 'Gilliam'},
        {name: 'Terry', surname: 'Jones'},
    ];

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
```

#### Virtual scroll

You can use `ComboBox` with `ScrollingModule` from @angular/cdk/scrolling .

**Template:**
```html
<tui-combo-box [(ngModel)]="value"> Country <ng-container *tuiDataList>
<!--48 = 44 height + 4 margin-->
<!--8 = data list padding-->
<cdk-virtual-scroll-viewport *tuiLet="countries | tuiFilterByInput as items" appendOnly tuiScrollable class="scroll" [itemSize]="48" [style.height.px]="items.length * 48 + 8" (indexChange)="list.handleFocusLossIfNecessary()" >
<tui-data-list #list>
<button *cdkVirtualFor="let item of items" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</ng-container>
</tui-combo-box>
```

**TypeScript:**
```ts
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiScrollable} from '@taiga-ui/core';
import {TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

import {IndexChange} from './index-change.directive';

@Component({
    standalone: true,
    selector: 'tui-combo-box-example-5',
    imports: [
        FormsModule,
        IndexChange,
        ScrollingModule,
        TuiComboBoxModule,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiLet,
        TuiScrollable,
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

    min-block-size: 4rem;
    max-block-size: 100%;
}
```

#### Options (stringify)

**Template:**
```html
<form>
<tui-combo-box tuiTextfieldSize="m" [formControl]="testValue" [tuiTextfieldLabelOutside]="true" > Employee <input placeholder="Type a name" tuiTextfieldLegacy />
<tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-combo-box>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataListWrapper, tuiItemsHandlersProvider} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Employee {
    readonly dept: {
        readonly id: number;
        readonly title: string;
    };
    readonly id: number;
    readonly name: string;
}

const STRINGIFY_EMPLOYEE: TuiStringHandler<Employee> = (item: Employee) =>
    `${item.name} (${item.dept.title})`;

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiItemsHandlersProvider({stringify: STRINGIFY_EMPLOYEE})],
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

#### Don't allow disabled options to be selected by typing them

**Template:**
```html
<tui-combo-box [stringify]="stringify" [(ngModel)]="value" > Find the best employees <input placeholder="Type a name" tuiTextfieldLegacy />
<ng-container *tuiDataList>
<tui-data-list>
<button *ngFor="let item of items | tuiFilterByInput" tuiOption type="button" [disabled]="item.disabled" [value]="item" > {{ stringify(item) }} </button>
</tui-data-list>
</ng-container>
</tui-combo-box>
<p class="tui-space_top-2">Selected value: {{ value | json }}</p>
```

**TypeScript:**
```ts
import {JsonPipe, NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        JsonPipe,
        NgFor,
        TuiComboBoxModule,
        TuiDataList,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly items = [
        {name: 'John', surname: 'Cleese', disabled: false},
        {name: 'Eric', surname: 'Idle', disabled: false},
        {name: 'Graham', surname: 'Chapman', disabled: true},
        {name: 'Michael', surname: 'Palin', disabled: true},
        {name: 'Terry', surname: 'Gilliam', disabled: false},
        {name: 'Terry', surname: 'Jones', disabled: false},
    ];

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
```

#### ID only

**Template:**
```html
<tui-combo-box [formControl]="control" [stringify]="stringify" > Type a name <tui-data-list-wrapper *tuiDataList [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
</tui-combo-box>
<p class="tui-space_top-2">Selected value: {{ control.value | json }}</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

interface Dictionary {
    readonly id: number;
    readonly name: string;
}

const DICTIONARY: Dictionary[] = [
    {id: 1, name: 'Luke Skywalker'},
    {id: 2, name: 'Princess Leia'},
    {id: 3, name: 'Darth Vader'},
    {id: 4, name: 'Han Solo'},
    {id: 5, name: 'Obi-Wan Kenobi'},
    {id: 6, name: 'Yoda'},
];

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(3);
    protected readonly items = DICTIONARY.map(({id}) => id);
    protected readonly stringify = (id: number): string =>
        DICTIONARY.find((item) => item.id === id)?.name || '';
}
```

Set a value with copied object from items to check
`identityMatcher`
:

- Import an Angular module for forms and
`TuiComboBoxModule`
in the same module where you want to use our component:

See samples to learn more about working with
`tui-data-list-wrapper`
or without them

- Declare a form (
`FormGroup`
) or a control (
`FormControl`
) in your component:

- Add to the template:
