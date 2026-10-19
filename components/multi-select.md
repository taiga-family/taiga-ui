# MultiSelect

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use InputChip instead! `MultiSelect` is a textfield with a dropdown for choosing several items

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiMultiSelectModule,
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
  <tui-multi-select formControlName="testValue">
    <tui-data-list-wrapper
      *tuiDataList
      tuiMultiSelectGroup
      [items]="items"
    ></tui-data-list-wrapper>
  </tui-multi-select>
</form>
```

### Example

```html
<ng-template>
<tui-multi-select [autoColor]="autoColor" [disabledItemHandler]="disabledItemHandler" [editable]="editable" [focusable]="focusable" [formControl]="control" [identityMatcher]="identityMatcher" [placeholder]="exampleText" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [rows]="rows" [stringify]="stringify" [tagValidator]="tagValidator" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" [valueContent]="valueContent" [(search)]="search" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Choose an account <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [disabledItemHandler]="disabledItemHandler" [items]="items" />
</tui-multi-select>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| search | `string | null` | Textfield value to subscribe on input or setting it from the outside (emits null when item from list selected) |
| disabledItemHandler | `TuiBooleanHandler<T>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > Handler for deactivation some items |
| editable | `boolean` | Textfield can be use for typing |
| rows | `number` | A number of visible rows |
| identityMatcher | `TuiIdentityMatcher` | A function that compares search and value to define a match between them. Must be a pure function |
| stringify | `TuiStringHandler` | A function that transforms object into a string. String(value) by default. Should be a pure function |
| valueContent | `PolymorpheusContent` | A template for custom view of selected value |
| tagValidator | `TuiBooleanHandler<T>` | " [documentationPropertyValues]="tagValidatorVariants" [(documentationPropertyValue)]="tagValidator" > A function that checks that tag is valid |
| autoColor | `boolean` | Auto color for tags ( autoColor = true does not work together with labelOutside ==== false : use only outside labels) |
| placeholder | `string` | Placeholder |

### Usage Examples

#### Strings array

**Template:**
```html
<tui-multi-select placeholder="Ignored text" [formControl]="control" [tagValidator]="tagValidator" [tuiTextfieldLabelOutside]="true" [(search)]="search" > Star Wars persons <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="filter(search)" />
</tui-multi-select>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, type TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

const ITEMS: readonly string[] = [
    'Luke Skywalker and a long time ago in a galaxy far, far away..',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
];

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected search: string | null = '';

    protected readonly control = new FormControl([ITEMS[0]]);

    @tuiPure
    protected filter(search: string | null): readonly string[] {
        return ITEMS.filter((item) => TUI_DEFAULT_MATCHER(item, search || ''));
    }

    protected tagValidator: TuiBooleanHandler<string> = (tag) => !tag.startsWith('Han');
}
```

#### Objects array

**Template:**
```html
<label> Type a name: <tui-multi-select *tuiLet="items$ | async as items" placeholder="Find by ..." [formControl]="testValue" [rows]="1" [tuiTextfieldLabelOutside]="true" (searchChange)="onSearchChange($event)" > Rock Star Frontend Developers <tui-data-list-wrapper *tuiDataList [itemContent]="itemContent" [items]="items | tuiHideSelected" />
</tui-multi-select>
</label>
<ng-template #itemContent let-data >
<div class="template">
<tui-avatar size="xs" class="avatar" [src]="data.avatarUrl || (data.toString() | tuiInitials)" /> {{ data }} </div>
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
import {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
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
        ReactiveFormsModule,
        TuiAvatar,
        TuiDataList,
        TuiDataListWrapper,
        TuiInitialsPipe,
        TuiLet,
        TuiMultiSelectModule,
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

    protected readonly testValue = new FormControl([databaseMockData[0]]);

    protected onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    /**
     * Server request emulation
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
.template {
    display: flex;
    align-items: center;
}

.avatar {
    margin: 0 0.5rem 0 -0.25rem;
}

tui-multi-select {
    max-inline-size: 20rem;
}
```

#### Sizes

**Template:**
```html
<form>
<tui-multi-select tuiTextfieldSize="s" [formControl]="control" [identityMatcher]="identityMatcher" [stringify]="stringify" [tuiTextfieldCleaner]="true" > Choose your heroes <tui-data-list *tuiDataList tuiMultiSelectGroup >
<button *ngFor="let item of items" tuiOption type="button" [value]="item" > {{ item.name }} </button>
</tui-data-list>
</tui-multi-select>
<tui-multi-select tuiTextfieldSize="m" class="tui-space_top-2" [editable]="false" [formControl]="control" [identityMatcher]="identityMatcher" [stringify]="stringify" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > Choose your heroes <tui-data-list *tuiDataList tuiMultiSelectGroup >
<button *ngFor="let item of items" tuiOption type="button" [value]="item" > {{ item.name }} </button>
</tui-data-list>
</tui-multi-select>
<tui-multi-select class="tui-space_top-2" [editable]="false" [formControl]="control" [identityMatcher]="identityMatcher" [stringify]="stringify" [tuiTextfieldCleaner]="true" > Choose your heroes <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [itemContent]="stringify" [items]="items" />
</tui-multi-select>
</form>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    type TuiContext,
    type TuiIdentityMatcher,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Hero {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly Hero[] = [
        {id: 1, name: 'Luke Skywalker'},
        {id: 2, name: 'Leia Organa Solo'},
        {id: 3, name: 'Darth Vader'},
        {id: 4, name: 'Han Solo'},
        {id: 5, name: 'Obi-Wan Kenobi'},
        {id: 6, name: 'Yoda'},
    ];

    protected readonly control = new FormControl([this.items[3], this.items[4]]);

    protected readonly stringify: TuiStringHandler<Hero | TuiContext<Hero>> = (item) =>
        'name' in item ? item.name : item.$implicit.name;

    protected readonly identityMatcher: TuiIdentityMatcher<Hero> = (hero1, hero2) =>
        hero1.id === hero2.id;
}
```

#### With IDs

**Template:**
```html
<tui-multi-select *tuiLet="items$ | async as items" [formControl]="control" [stringify]="(stringify$ | async)!" [tuiTextfieldLabelOutside]="true" (searchChange)="onSearch($event)" >
<tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [itemContent]="(stringify$ | async)!" [items]="items" />
</tui-multi-select>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_DEFAULT_MATCHER,
    type TuiContext,
    type TuiHandler,
    tuiIsNumber,
    TuiLet,
} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {
    map,
    type Observable,
    shareReplay,
    startWith,
    Subject,
    switchMap,
    timer,
} from 'rxjs';

const DICTIONARY = [
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
        AsyncPipe,
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiLet,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    // Server request emulation
    private readonly server$ = timer(5000).pipe(
        map(() => DICTIONARY),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    private readonly search$ = new Subject<string>();

    // Items only hold IDs
    protected readonly items$ = this.search$.pipe(
        startWith(''),
        switchMap((search) =>
            this.server$.pipe(
                map((items) =>
                    items
                        .filter(({name}) => TUI_DEFAULT_MATCHER(name, search))
                        .map(({id}) => id),
                ),
            ),
        ),
        startWith(null), // <-- loading
    );

    // Stringify mapper that turns IDs to names
    protected readonly stringify$: Observable<
        TuiHandler<TuiContext<number> | number, string>
    > = this.server$.pipe(
        map((items) => new Map(items.map<[number, string]>(({id, name}) => [id, name]))),
        startWith(new Map()),
        map(
            (map) => (id: TuiContext<number> | number) =>
                (tuiIsNumber(id) ? map.get(id) : map.get(id.$implicit)) || 'Loading...',
        ),
    );

    protected readonly control = new FormControl([2, 3]);

    protected onSearch(search: string | null): void {
        this.search$.next(search || '');
    }
}
```

#### Datalist

**Template:**
```html
<tui-multi-select [editable]="false" [rows]="1" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" >
<tui-data-list *tuiDataList>
<tui-opt-group label="Jedi, may the force be with them blah blah blah" tuiMultiSelectGroup >
<button *ngFor="let item of jedi" tuiOption type="button" [style.flex-direction]="'row-reverse'" [value]="item" >
<span [style.flex]="1">{{ item }}</span>
</button>
</tui-opt-group>
<tui-opt-group label="Sith">
<button *ngFor="let item of sith | tuiHideSelected" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-opt-group>
</tui-data-list>
</tui-multi-select>
<tui-multi-select class="tui-space_top-5" [editable]="false" [rows]="1" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" >
<tui-data-list *tuiDataList>
<tui-opt-group label="Jedi, may the force be with them blah blah blah" tuiMultiSelectGroup >
<button *ngFor="let item of jedi" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-opt-group>
<tui-opt-group tuiMultiSelectGroup>
<button *ngFor="let item of sith" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-opt-group>
</tui-data-list>
</tui-multi-select>
<tui-multi-select class="tui-space_top-5" [editable]="false" [rows]="1" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" >
<tui-data-list *tuiDataList>
<tui-opt-group label="Jedi, may the force be with them blah blah blah" tuiMultiSelectGroup >
<button *ngFor="let item of jedi" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-opt-group>
<tui-opt-group label="Jedi, may the force be with them blah blah blah (second time)" tuiMultiSelectGroup >
<button *ngFor="let item of sith" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-opt-group>
</tui-data-list>
</tui-multi-select>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiDataList,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly jedi: readonly string[] = [
        'Luke Skywalker',
        'Princess Leia',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected readonly sith: readonly string[] = ['Emperor', 'Darth Vader', 'Darth Maul'];

    protected value: readonly string[] = [this.jedi[0] ?? ''];
}
```

#### Direction: RTL

**Template:**
```html
<tui-multi-select class="input" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" >
<tui-data-list-wrapper *tuiDataList [items]="items | tuiHideSelected" />
</tui-multi-select>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly string[] = [
        'گراهام چپمن',
        'جان کلیز',
        'تری گیلیام',
        'اریک آیدل',
        'تری جونز',
        'مایکل پیلین',
    ];

    protected value: readonly string[] = [this.items[0] ?? ''];
}
```

**LESS:**
```less
.input {
    inline-size: 20rem;
    direction: rtl;
}
```

#### Virtual scroll

**Template:**
```html
<tui-multi-select [editable]="false" [valueContent]="content" [(ngModel)]="value" > Applicable countries <cdk-virtual-scroll-viewport *tuiDataList appendOnly tuiScrollable class="scroll" [itemSize]="44" >
<tui-data-list tuiMultiSelectGroup>
<button *cdkVirtualFor="let item of countries" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</tui-multi-select>
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
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        FormsModule,
        TuiDataList,
        TuiMultiSelectModule,
        TuiScrollable,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: readonly string[] = [];

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

    protected get content(): string {
        return `Selected ${this.value.length} of ${this.countries.length}`;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.scroll {
    .scrollbar-hidden();

    block-size: 12.5rem;

    --tui-duration: 0;
}
```

#### Options (stringify)

**Template:**
```html
<form>
<tui-multi-select tuiTextfieldSize="m" [editable]="false" [formControl]="testValue" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > Employees <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
<tui-multi-select class="tui-space_top-2" [editable]="false" [formControl]="testValue" [tuiTextfieldCleaner]="true" > Employees <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, tuiItemsHandlersProvider} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

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
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            identityMatcher: (item1: Employee, item2: Employee) => item1.id === item2.id,
            stringify: (item: Employee | TuiContext<Employee>) =>
                'name' in item
                    ? `${item.name} (${item.dept.title})`
                    : `${item.$implicit.name} (${item.$implicit.dept.title})`,
        }),
    ],
})
export default class Example {
    protected readonly testValue = new FormControl<Employee[]>([]);

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

#### Inside dialog

**Template:**
```html
<button size="m" tuiButton type="button" class="tui-space_right-3" (click)="showDialog(template, 's')" > Show 's' size </button>
<p>
<button size="m" tuiButton type="button" class="tui-space_right-3" (click)="showDialog(template, 'm')" > Show 'm' size </button>
</p>
<button size="m" tuiButton type="button" (click)="showDialog(template, 'l')" > Show 'l' size </button>
<ng-template #template let-data="data" >
<div class="tui-container_fullwidth">
<div class="tui-row tui-row_adaptive">
<label class="tui-col_md-12"> Star Wars persons <tui-multi-select [formControl]="testValue" [rows]="1" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" [tuiTextfieldSize]="data.textFieldSize" >
<tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
</label>
</div>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiDataList,
    type TuiDialogContext,
    TuiDialogService,
    type TuiSizeL,
    type TuiSizeS,
} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly testValue = new FormControl<string[]>([]);

    protected readonly items: readonly string[] = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected showDialog(
        content: PolymorpheusContent<TuiDialogContext>,
        textFieldSize: TuiSizeL | TuiSizeS,
    ): void {
        this.dialogs.open(content, {data: {textFieldSize}}).subscribe();
    }
}
```

#### Native select

**Template:**
```html
<span class="tui-text_body-l">Strings:</span>
<tui-multi-select class="tui-space_top-5" [editable]="false" [formControl]="itemStringControl" [tuiHintContent]="'hint'" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > Star Wars persons <select multiple tuiSelect [items]="items" ></select>
</tui-multi-select>
<tui-multi-select class="tui-space_vertical-5" [disabledItemHandler]="disableHandler" [editable]="false" [formControl]="itemStringGroupControl" [tuiTextfieldLabelOutside]="true" > Star Wars persons <select multiple tuiSelect [items]="groupItems" [labels]="labels" ></select>
</tui-multi-select>
<span class="tui-text_body-l">Objects (stringify):</span>
<tui-multi-select class="tui-space_top-5" [editable]="false" [formControl]="itemControl" [stringify]="stringify" [tuiHintContent]="'hint'" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > Star Wars persons <select multiple tuiSelect [items]="customItems" ></select>
</tui-multi-select>
<tui-multi-select class="tui-space_top-5" [disabledItemHandler]="disableItemHandler" [editable]="false" [formControl]="itemGroupControl" [stringify]="stringify" [tuiTextfieldLabelOutside]="true" > Star Wars persons <select multiple tuiSelect [items]="customGroupItems" [labels]="labels" ></select>
</tui-multi-select>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiHint} from '@taiga-ui/core';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Item {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiHint,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected itemStringControl = new FormControl<string[]>([]);
    protected itemControl = new FormControl<Item[]>([]);
    protected itemStringGroupControl = new FormControl<string[]>([]);
    protected itemGroupControl = new FormControl<Item[]>([]);

    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected customItems: readonly Item[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected groupItems = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected customGroupItems: readonly Item[][] = [
        [
            {name: 'Caesar', id: 1},
            {name: 'Apple and Chicken', id: 2},
        ],
        [
            {name: 'Broccoli Cheddar', id: 3},
            {name: 'Chicken and Rice', id: 4},
            {name: 'Chicken Noodle', id: 5},
        ],
    ];

    protected labels = ['Salad', 'Soup'];

    protected stringify: TuiStringHandler<Item> = (item) => item.name;

    protected disableHandler: TuiBooleanHandler<string> = (item) =>
        item.startsWith('Broccoli');

    protected disableItemHandler: TuiBooleanHandler<Item> = ({name}) =>
        name.startsWith('Broccoli');
}
```

#### Value content

**Template:**
```html
<tui-multi-select [tuiTextfieldLabelOutside]="true" [valueContent]="valueContent" [(ngModel)]="value" >
<tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
<tui-multi-select class="tui-space_top-4" [valueContent]="content" [(ngModel)]="value" > Select <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
<ng-template #valueContent let-list >
<div class="t-wrapper">
<ng-container *ngFor="let item of list">
<tui-tag size="l" class="t-tag" [removable]="true" [value]="item" (edited)="remove(item)" />
</ng-container>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {
    TuiMultiSelectModule,
    TuiTagModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected value: string[] = this.items;

    protected content: PolymorpheusContent<TuiContext<string[]>> = ({
        $implicit: {length},
    }) => `Selected: ${length}`;

    protected remove(item: string): void {
        this.value = this.value.filter((val) => val !== item);
    }
}
```

**LESS:**
```less
.t-tag {
    margin: 0.125rem 0.5rem 0.125rem -0.25rem;
}

.t-wrapper {
    flex-wrap: wrap;
    padding-inline-start: 0.25rem;
}
```

#### Nested datalist

**Template:**
```html
<tui-multi-select [editable]="false" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" >
<tui-data-list *tuiDataList tuiDataListDropdownManager tuiMultiSelectGroup >
<button *ngFor="let item of mainOptions" tuiOption type="button" [value]="item" > {{ item }} </button>
<button iconEnd="@tui.chevron-right" moreOption tuiDropdownAlign="right" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="moreList" > More </button>
</tui-data-list>
<ng-template #moreList>
<tui-data-list tuiDataListDropdownManager tuiMultiSelectGroup >
<button *ngFor="let option of moreOptions" tuiOption type="button" [value]="option" > {{ option }} </button>
</tui-data-list>
</ng-template>
</tui-multi-select>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, Directive} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Directive({
    standalone: true,
    selector: '[moreOption]',
    providers: [tuiAsOptionContent(null)],
})
export class MoreOption {}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        MoreOption,
        NgForOf,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly mainOptions: readonly string[] = [
        'Item #1',
        'Item #2',
        'Item #3',
        'Item #4',
        'Item #5',
    ];

    public readonly moreOptions: readonly string[] = ['Item #6', 'Item #7', 'Item #8'];

    public value: readonly string[] = [
        this.mainOptions[2] ?? '',
        this.moreOptions[1] ?? '',
    ];
}
```

#### Long items

**Template:**
```html
<tui-multi-select [(ngModel)]="value"> Multiple lines <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
<p>
<tui-multi-select [(ngModel)]="value"> Scrollable with fade <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [itemContent]="fade" [items]="items" />
<ng-template #fade let-item >
<div tuiFade class="fade" > {{ item }} </div>
</ng-template>
</tui-multi-select>
</p>
<tui-multi-select [(ngModel)]="value"> Ellipsis <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [itemContent]="ellipsis" [items]="items" />
<ng-template #ellipsis let-item >
<div class="ellipsis">{{ item }}</div>
</ng-template>
</tui-multi-select>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFade} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiDataListWrapper, TuiFade, TuiMultiSelectModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly string[] = [
        'I am a very very long item that definitely overflows',
    ];

    protected value: readonly string[] = [];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.fade {
    white-space: nowrap;
}

.ellipsis {
    .text-overflow();
}
```

#### Readonly

**Template:**
```html
<tui-multi-select [editable]="false" [formControl]="formControl" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" [valueContent]="categoryNames" > Castles <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [itemContent]="categoryName" [items]="categories" />
</tui-multi-select>
<ng-template #categoryNames let-categories >
<ng-container *ngFor="let category of categories; let last = last"> {{ category.name }} <ng-container *ngIf="!last">&nbsp;•&nbsp;</ng-container>
</ng-container>
</ng-template>
<ng-template #categoryName let-category > {{ category.name }} </ng-template>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Category {
    id: number;
    name: string;
}

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected categories: Category[] = [
        {
            id: 1,
            name: 'Ashlar Hall',
        },
        {
            id: 2,
            name: 'Kryal Castle',
        },
        {
            id: 3,
            name: 'Mock castles',
        },
        {
            id: 4,
            name: 'Tureborg Castle',
        },
        {
            id: 5,
            name: 'Mrs. Edward B. Craig House',
        },
    ];

    protected readonly formControl = new FormControl([
        this.categories[0],
        this.categories[1],
        this.categories[3],
    ]);
}
```

#### Multi group with separate data list

**Template:**
```html
<form [formGroup]="form">
<button appearance="outline-grayscale" tuiButton tuiDropdownDirection="bottom" type="button" [tuiAppearanceMode]="length ? 'checked' : null" [tuiDropdown]="dropdown" [(tuiDropdownOpen)]="open" > Statuses </button>
<ng-template #dropdown>
<tui-data-list-wrapper formControlName="control" tuiMultiSelectGroup [items]="items" />
</ng-template>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiDataListWrapper, tuiItemsHandlersProvider} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Status {
    name: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            identityMatcher: (controlValue: {name: string}, item: {name: string}) =>
                controlValue.name === item.name,
            stringify: (item: {name: string}): string => `${item.name}`,
        }),
    ],
})
export default class Example {
    protected open = false;

    protected readonly items: readonly Status[] = [
        {name: 'Drafts'},
        {name: 'In Progress'},
        {name: 'Completed'},
    ];

    protected readonly form = new FormGroup({
        control: new FormControl<readonly Status[]>([{name: 'Drafts'}]),
    });

    protected get length(): number {
        return this.form.controls.control.value?.length || 0;
    }
}
```

Set a value with copied object from items to check
`identityMatcher`
:
