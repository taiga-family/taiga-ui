# Table

- **Package**: `ADDON-TABLE`
- **Type**: components

This module allows you to create various tables, both static and editable.

### How to Use (Import)

```ts
import {TuiTable} from '@taiga-ui/addon-table';

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTable,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<table
  tuiTable
  [columns]="columns"
>
  <thead tuiThead>
    <tr tuiThGroup>
      <th
        *tuiHead="'name'"
        tuiTh
      >
        Name
      </th>
      <th
        *tuiHead="'email'"
        tuiTh
      >
        E-mail
      </th>
      <th
        *tuiHead="'status'"
        tuiTh
      >
        Status
      </th>
      <th
        *tuiHead="'tags'"
        tuiTh
        [sorter]="null"
      >
        Tags
      </th>
    </tr>
  </thead>
  <tbody
    *tuiLet="users | tuiTableSort as sortedUsers"
    tuiTbody
    [data]="sortedUsers"
  >
    <tr
      *ngFor="let item of sortedUsers"
      tuiTr
    >
      <td
        *tuiCell="'name'"
        tuiTd
      >
        {{ item.name }}
      </td>
      <td
        *tuiCell="'email'"
        tuiTd
      >
        <a
          *ngIf="item.email"
          tuiLink
          [href]="'mailto:' + item.email"
        >
          {{ item.email }}
        </a>
      </td>
      <td
        *tuiCell="'status'"
        tuiTd
      >
        <div [class]="item.status">{{ item.status }}</div>
      </td>
      <td
        *tuiCell="'tags'"
        tuiTd
      >
        <tui-tag
          class="tui-space_right-1"
          *ngFor="let tag of item.tags"
          [value]="tag"
          [autoColor]="true"
        ></tui-tag>
      </td>
    </tr>
  </tbody>
</table>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| columns | `readonly string[]` | An array of keys to set up columns order |
| size | `TuiSizeS | TuiSizeL` | Cells size |
| sorter | `TuiComparator<T>` | " > Sort function (basic JavaScript array sort API) |
| direction | `-1 | 1` | Direction for sorting |

### Usage Examples

#### Basic

**Template:**
```html
<table tuiTable class="table" [columns]="columns" >
<thead>
<tr tuiThGroup>
<th tuiTh [maxWidth]="500" [minWidth]="200" [resizable]="true" > Name </th>
<th tuiTh>Balance</th>
</tr>
</thead>
<tbody tuiTbody [data]="data" >
<tr *ngFor="let item of data" tuiTr >
<td *tuiCell="'balance'" tuiTd > {{ item.balance | tuiFormatNumber | async }} </td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgForOf, TuiFormatNumberPipe, TuiTable],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
        },
        {
            name: 'Roman Sedov',
            balance: 423242,
        },
    ] as const;

    protected readonly columns = Object.keys(this.data[0]);
}
```

**LESS:**
```less
.table {
    inline-size: 100%;
}
```

#### Custom

**Template:**
```html
<div [style.margin-bottom.rem]="2">
<tui-radio-list [itemContent]="content" [items]="sizes" [style.flex-direction]="'row'" [style.width]="'max-content'" [(ngModel)]="size" />
<ng-template #content let-value > {{ value === 's' ? 'Small' : value === 'm' ? 'Medium' : 'Large' }} </ng-template>
</div>
<table tuiTable [size]="size" [style.width.rem]="58" [(ngModel)]="selected" >
<thead>
<tr>
<th tuiTh>
<div [tuiCell]="size">
<input tuiCheckbox tuiCheckboxTable type="checkbox" [size]="size === 'l' ? 'm' : 's'" />
<span tuiTitle>Checkbox</span>
</div>
</th>
<th tuiTh>Title</th>
<th tuiTh>Cell</th>
<th tuiTh>Status</th>
<th tuiTh [style.width.rem]="10" > Items </th>
<th tuiTh>Progress</th>
<th tuiTh>Actions</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of data">
<td tuiTd>
<div [tuiCell]="size">
<input tuiCheckbox type="checkbox" [size]="size === 'l' ? 'm' : 's'" [tuiCheckboxRow]="item" />
<span tuiTitle> {{ item.checkbox.title }} <span tuiSubtitle>{{ item.checkbox.subtitle }}</span>
</span>
</div>
</td>
<td tuiTd>
<div [tuiCell]="size">
<span tuiTitle>
<span tuiStatus>
<tui-icon [icon]="item.title.icon" /> {{ item.title.title }} <tui-chip *ngIf="item.title.chip && item.title.subtitle">{{ item.title.chip }}</tui-chip>
</span>
<tui-chip *ngIf="!item.title.subtitle && item.title.chip; else subtitle"> {{ item.title.chip }} </tui-chip>
<ng-template #subtitle>
<span tuiSubtitle> {{ item.title.subtitle }} </span>
</ng-template>
</span>
</div>
</td>
<td tuiTd>
<div [tuiCell]="size">
<tui-avatar [src]="item.cell.name | tuiInitials" [style.background]="item.cell.name | tuiAutoColor" />
<span tuiTitle> {{ item.cell.name }} <span tuiSubtitle>{{ item.cell.email }}</span>
</span>
</div>
</td>
<td tuiTd>
<span [tuiStatus]="item.status.color">{{ item.status.value }}</span>
</td>
<td tuiTd>
<tui-items-with-more [style.gap.rem]="0.25">
<ng-container *ngFor="let chip of item.items">
<tui-badge *tuiItem>{{ chip }}</tui-badge>
</ng-container>
<ng-template let-number tuiMore >
<button appearance="action-grayscale" tuiDropdownAlign="right" tuiDropdownOpen tuiLink type="button" [pseudo]="true" [tuiDropdown]="dropdown" > + {{ item.items.length - number - 1 }} </button>
<ng-template #dropdown>
<div tuiStatus [style.padding.rem]="1" >
<ng-container *ngFor="let chip of item.items; let index = index">
<tui-badge *ngIf="index > number">{{ chip }}</tui-badge>
</ng-container>
</div>
</ng-template>
</ng-template>
</tui-items-with-more>
</td>
<td tuiTd>
<span tuiStatus>
<progress tuiProgressBar [style.width.rem]="6" [value]="item.progress / 100" ></progress> {{ item.progress }}ms </span>
</td>
<td tuiTd>
<span tuiStatus>
<button appearance="action" iconStart="@tui.pencil" size="xs" tuiIconButton type="button" > Edit </button>
<button appearance="action" iconStart="@tui.ellipsis" size="xs" tuiIconButton type="button" > More </button>
</span>
</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {
    TuiAutoColorPipe,
    TuiButton,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiCheckbox,
    TuiChip,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCell,
        TuiCheckbox,
        TuiChip,
        TuiDropdown,
        TuiIcon,
        TuiInitialsPipe,
        TuiItemsWithMore,
        TuiLink,
        TuiProgressBar,
        TuiRadioList,
        TuiStatus,
        TuiTable,
        TuiTableControl,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['l', 'm', 's'] as const;

    protected size = this.sizes[0];
    protected selected = [];

    protected readonly data = [
        {
            checkbox: {
                title: 'Data point 1',
                subtitle: 'The first element',
            },
            title: {
                icon: '@tui.file',
                title: 'This is title',
                chip: 'Chip',
                subtitle: 'More information ・ Data',
            },
            cell: {
                name: 'John Cleese',
                email: 'silly@walk.uk',
            },
            status: {
                value: 'Success',
                color: 'var(--tui-status-positive)',
            },
            items: ['Some', 'items', 'displayed', 'here', 'and', 'can', 'overflow'],
            progress: 78,
        },
        {
            checkbox: {
                title: 'Some title',
                subtitle: 'Some more text',
            },
            title: {
                icon: '@tui.heart',
                title: 'More info',
                chip: 'Chips can be here',
            },
            cell: {
                name: 'Eric Idle',
                email: 'cool@dude.com',
            },
            status: {
                value: 'Failure',
                color: 'var(--tui-status-negative)',
            },
            items: ['One', 'Item'],
            progress: 91,
        },
        {
            checkbox: {
                title: 'And now',
                subtitle: 'Completely different',
            },
            title: {
                icon: '@tui.star',
                title: 'Wow',
            },
            cell: {
                name: 'Michael Palin',
                email: 'its@man.com',
            },
            status: {
                value: 'Pending',
                color: 'var(--tui-status-warning)',
            },
            items: [],
            progress: 32,
        },
    ];
}
```

**LESS:**
```less
[tuiTh],
[tuiTd] {
    border-inline-start: none;
    border-inline-end: none;
}

[tuiTable][data-size='s'] [tuiTitle] {
    flex-direction: row;
    gap: 0.375rem;
}
```

#### Editable

**Template:**
```html
<tui-scrollbar waIntersectionRoot class="scrollbar" [hidden]="true" >
<table size="l" tuiTable class="table" [columns]="columns" [direction]="-1" [sorter]="totalSorter" >
<thead tuiThead>
<tr tuiThGroup>
<th *tuiHead="'name'" rowspan="2" tuiTh class="first" [sorter]="null" [sticky]="true" > Name </th>
<th *tuiHead="'price'" rowspan="2" tuiTh class="number second" [sticky]="true" > Price,&nbsp;$ </th>
<th *tuiHead="'quantity'" colspan="2" tuiTh [sorter]="null" > Purchase </th>
<ng-container *tuiHead="'unit'" />
<th *tuiHead="'date'" rowspan="2" tuiTh > Date </th>
<th *tuiHead="'total'" rowspan="2" tuiTh class="number" [sorter]="totalSorter" > Total </th>
</tr>
<tr tuiThGroup>
<th *tuiHead="'quantity'" tuiTh class="number border" > Quantity </th>
<th *tuiHead="'unit'" tuiTh > Units </th>
</tr>
</thead>
<tbody *tuiLet="pythons | tuiTableSort as sortedPythons" heading="Monty Python" tuiTbody [data]="sortedPythons" >
<tr *ngFor="let item of sortedPythons; trackBy: trackByIndex" tuiTr >
<th *tuiCell="'name'" tuiTd [colSpan]="item.price > 1000 ? 2 : 0" >
<tui-textfield>
<textarea tuiTextarea [ngModel]="item.name" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'name', item, pythons)" ></textarea>
</tui-textfield>
</th>
<ng-container *tuiCell="'price'">
<th *ngIf="item.price <= 1000" tuiTd class="second" >
<tui-textfield>
<input tuiInputNumber class="number" [ngModel]="item.price" [ngModelOptions]="options" [tuiValidator]="minPrice" (ngModelChange)="onValueChange($event, 'price', item, pythons)" />
</tui-textfield>
</th>
</ng-container>
<td *tuiCell="'quantity'" tuiTd >
<tui-textfield>
<input tuiInputNumber [ngModel]="item.quantity" [ngModelOptions]="options" [tuiNumberFormat]="{precision: 0}" (ngModelChange)="onValueChange($event, 'quantity', item, pythons)" />
</tui-textfield>
</td>
<td *tuiCell="'unit'" tuiTd >
<tui-textfield tuiChevron class="select" >
<select placeholder="Units" tuiTextfield [ngModel]="item.unit" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'unit', item, pythons)" ></select>
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="units" />
</tui-textfield>
</td>
<td *tuiCell="'date'" tuiTd >
<tui-input-date [ngModel]="item.date" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'date', item, pythons)" />
</td>
<td *tuiCell="'total'" tuiTd class="number text" > {{ getTotal(item) | tuiFormatNumber | async }} </td>
</tr>
</tbody>
<tbody *tuiLet="starwars | tuiTableSort as sortedStarwars" tuiTbody [data]="sortedStarwars" [heading]="template" >
<tr *ngFor="let item of sortedStarwars; trackBy: trackByIndex" tuiTr >
<th *tuiCell="'name'" tuiTd >
<tui-textfield>
<textarea tuiTextarea [ngModel]="item.name" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'name', item, starwars)" ></textarea>
</tui-textfield>
</th>
<th *tuiCell="'price'" tuiTd class="second" >
<tui-textfield>
<input tuiInputNumber [ngModel]="item.price" [ngModelOptions]="options" [tuiValidator]="minPrice" (ngModelChange)="onValueChange($event, 'price', item, starwars)" />
</tui-textfield>
</th>
<td *tuiCell="'quantity'" tuiTd >
<tui-textfield>
<input tuiInputNumber [ngModel]="item.quantity" [ngModelOptions]="options" [tuiNumberFormat]="{precision: 0}" (ngModelChange)="onValueChange($event, 'quantity', item, starwars)" />
</tui-textfield>
</td>
<td *tuiCell="'unit'" tuiTd >
<tui-textfield tuiChevron class="select" >
<select placeholder="Units" tuiTextfield [ngModel]="item.unit" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'unit', item, starwars)" ></select>
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="units" />
</tui-textfield>
</td>
<td *tuiCell="'date'" tuiTd >
<tui-input-date [ngModel]="item.date" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'date', item, starwars)" />
</td>
<td *tuiCell="'total'" tuiTd class="number text" > {{ getTotal(item) | tuiFormatNumber | async }} </td>
</tr>
</tbody>
</table>
</tui-scrollbar>
<ng-template #template>
<tui-icon icon="@tui.star" class="tui-space_right-3" /> Star Wars </ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, type ValidatorFn} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {type TuiComparator, TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiDefaultSort, TuiLet, TuiValidator} from '@taiga-ui/cdk';
import {
    TuiFormatNumberPipe,
    TuiIcon,
    TuiNumberFormat,
    TuiScrollbar,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiInputNumber, TuiTextarea} from '@taiga-ui/kit';
import {TuiInputDateModule} from '@taiga-ui/legacy';

interface Item {
    readonly date: TuiDay;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly unit: string;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        TuiChevron,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiIcon,
        TuiInputDateModule,
        TuiInputNumber,
        TuiLet,
        TuiNumberFormat,
        TuiScrollbar,
        TuiTable,
        TuiTextarea,
        TuiTextfield,
        TuiValidator,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly options = {updateOn: 'blur'} as const;

    protected readonly units = ['items', 'kg', 'm'];

    protected pythons: readonly Item[] = [
        {
            name: 'Holy Grail',
            price: 999999,
            quantity: 1,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal(),
        },
        {
            name: 'Foot',
            price: 29.95,
            quantity: 5,
            unit: this.units[2] ?? '',
            date: TuiDay.currentLocal().append({day: -42}),
        },
        {
            name: 'Shed',
            price: 499,
            quantity: 2,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal().append({day: -237}),
        },
    ];

    protected starwars: readonly Item[] = [
        {
            name: 'Lightsaber',
            price: 4999,
            quantity: 3,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal(),
        },
        {
            name: 'Spaceship',
            price: 19999,
            quantity: 1,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal().append({day: -237}),
        },
        {
            name: 'Stormtrooper helmet',
            price: 14.95,
            quantity: 5,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal().append({day: -42}),
        },
    ];

    protected readonly columns = ['name', 'price', 'quantity', 'unit', 'total'] as const;

    protected readonly minPrice: ValidatorFn = ({value}) =>
        value > 400 ? null : {minPrice: 'Price must be above $400'};

    protected readonly totalSorter: TuiComparator<Item> = (a, b) =>
        tuiDefaultSort(a.price * a.quantity, b.price * b.quantity);

    protected trackByIndex(index: number): number {
        return index;
    }

    protected getTotal({price, quantity}: Item): number {
        return price * quantity;
    }

    protected onValueChange<K extends keyof Item>(
        value: Item[K],
        key: K,
        current: Item,
        data: readonly Item[],
    ): void {
        const updated = {...current, [key]: value};

        this.pythons =
            data === this.pythons
                ? this.pythons.map((item) => (item === current ? updated : item))
                : this.pythons;

        this.starwars =
            data === this.starwars
                ? this.starwars.map((item) => (item === current ? updated : item))
                : this.starwars;
    }
}
```

**LESS:**
```less
.table {
    table-layout: fixed;
}

.number {
    text-align: end;
    flex-direction: row-reverse;
}

.first {
    min-inline-size: 11.25rem;
    max-inline-size: 11.25rem;
}

.second {
    left: 11.25rem;
}

.text {
    vertical-align: top;
    padding-block-start: 1rem;
}

// Due to rowSpan this item appears to be the first child
// but it shouldn't have the left border in reality
.border {
    border-inline-start: none;
}

.select {
    inline-size: 6.25rem;
}

.scrollbar {
    max-block-size: 18.75rem;
}
```

#### With tuiSortBy directive to work with column titles instead of sorters

**Template:**
```html
<p tuiTextfieldSize="m" class="filters" >
<tui-textfield class="input">
<label tuiLabel>Find on page</label>
<input tuiTextfield [(ngModel)]="search" />
</tui-textfield>
<tui-textfield>
<label tuiLabel>Minimum age</label>
<input tuiInputNumber [formControl]="minAge" [tuiNumberFormat]="{precision: 0}" />
</tui-textfield>
</p>
<p class="filters">
<label tuiLabel>
<input tuiCheckbox type="checkbox" [(ngModel)]="dob" /> Enable sorting by DOB </label>
<button size="m" tuiButton tuiChevron tuiDropdownOpen type="button" [tuiDropdown]="dropdown" > Columns </button>
<ng-template #dropdown>
<tui-reorder class="columns" [enabled]="enabled" [(items)]="initial" (enabledChange)="onEnabled($event)" />
</ng-template>
</p>
<tui-loader [overlay]="true" [showLoader]="!!(loading$ | async)" >
<p>
<b>Sort key:</b> {{ sortKey$ | async }}, <b>direction:</b> {{ direction$ | async }} </p>
<table *ngIf="data$ | async as data" tuiTable class="table" [columns]="columns" [direction]="(direction$ | async) ?? -1" [tuiSortBy]="sortKey$ | async" (tuiSortChange)="change($event)" >
<thead>
<tr tuiThGroup>
<th *tuiHead="'name'" tuiSortable tuiTh [requiredSort]="true" > Name </th>
<th *tuiHead="'dob'" tuiTh [tuiSortable]="dob" > Date of Birth </th>
<th *tuiHead="'age'" tuiSortable tuiTh [requiredSort]="true" > Age </th>
</tr>
</thead>
<tbody *tuiLet="data | tuiTableSort as sortedData" tuiTbody [data]="sortedData" >
<tr *ngFor="let item of sortedData" tuiTr >
<td *tuiCell="'name'" tuiTd [class.match]="isMatch(item.name)" > {{ item.name }} </td>
<td *tuiCell="'dob'" tuiTd [class.match]="isMatch(item.dob)" > {{ item.dob }} </td>
<td *tuiCell="'age'" tuiTd [class.match]="isMatch(item.age)" > {{ item.age }} </td>
</tr>
</tbody>
<tfoot>
<tr>
<td [colSpan]="columns.length">
<tui-table-pagination class="tui-space_top-2" [page]="(page$ | async) || 0" [total]="(total$ | async) || 0" (paginationChange)="onPagination($event)" />
</td>
</tr>
</tfoot>
</table>
</tui-loader>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    type TuiComparator,
    TuiReorder,
    type TuiSortChange,
    TuiSortDirection,
    TuiTable,
    TuiTablePagination,
    type TuiTablePaginationEvent,
} from '@taiga-ui/addon-table';
import {
    TUI_DEFAULT_MATCHER,
    tuiControlValue,
    TuiDay,
    tuiDefaultSort,
    tuiIsFalsy,
    tuiIsPresent,
    TuiLet,
    tuiToInt,
} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDropdown,
    TuiLabel,
    TuiLoader,
    TuiNumberFormat,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiCheckbox, TuiChevron, TuiInputNumber} from '@taiga-ui/kit';
import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    filter,
    map,
    type Observable,
    share,
    startWith,
    switchMap,
    tap,
    timer,
} from 'rxjs';

interface User {
    readonly dob: TuiDay;
    readonly name: string;
    readonly age: number;
}

const TODAY = TuiDay.currentLocal();

const FIRST = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'James',
    'Joan',
    'Jim',
    'Julia',
    'Joe',
    'Julia',
];

const LAST = [
    'Smith',
    'West',
    'Brown',
    'Jones',
    'Davis',
    'Miller',
    'Johnson',
    'Jackson',
    'Williams',
    'Wilson',
];

const DATA: readonly User[] = Array.from({length: 300}, () => {
    const dob = TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
        age = getAge(dob),
        name = `${LAST[Math.floor(Math.random() * 10)]}, ${FIRST[Math.floor(Math.random() * 10)]}`;

    return {name, dob, age};
});

const KEYS: Record<string, keyof User> = {
    Name: 'name',
    Age: 'age',
    'Date of Birth': 'dob',
};

function sortBy(key: keyof User, direction: TuiSortDirection): TuiComparator<User> {
    return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

function getAge(dob: TuiDay): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = tuiToInt(months > 0 || (!months && days > 9));

    return years + offset;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiButton,
        TuiCheckbox,
        TuiChevron,
        TuiDropdown,
        TuiInputNumber,
        TuiLabel,
        TuiLet,
        TuiLoader,
        TuiNumberFormat,
        TuiReorder,
        TuiTable,
        TuiTablePagination,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly size$ = new BehaviorSubject(10);
    protected readonly page$ = new BehaviorSubject(0);

    protected readonly direction$ = new BehaviorSubject<TuiSortDirection>(
        TuiSortDirection.Desc,
    );

    protected readonly sortKey$ = new BehaviorSubject<keyof User>('name');

    protected readonly minAge = new FormControl(21);
    protected readonly minAge$ = tuiControlValue<number>(this.minAge).pipe(
        debounceTime(1000),
        tap(() => this.page$.next(0)),
    );

    protected readonly request$ = combineLatest([
        this.sortKey$,
        this.direction$,
        this.page$,
        this.size$,
        this.minAge$,
    ]).pipe(
        // zero time debounce for a case when both key and direction change
        debounceTime(0),
        switchMap((query) => this.getData(...query).pipe(startWith(null))),
        share(),
    );

    protected initial: readonly string[] = ['Name', 'Date of Birth', 'Age'];

    protected enabled = this.initial;

    protected columns = ['name', 'dob', 'age'];

    protected dob = false;

    protected search = '';

    protected readonly loading$ = this.request$.pipe(map(tuiIsFalsy));

    protected readonly total$ = this.request$.pipe(
        filter(tuiIsPresent),
        map(({length}) => length),
        startWith(1),
    );

    protected readonly data$: Observable<readonly User[]> = this.request$.pipe(
        filter(tuiIsPresent),
        map((users) => users.filter(tuiIsPresent)),
        startWith([]),
    );

    protected onEnabled(enabled: readonly string[]): void {
        this.enabled = enabled;
        this.columns = this.initial
            .filter((column) => enabled.includes(column))
            .map((column) => KEYS[column] ?? '');
    }

    protected onPagination({page, size}: TuiTablePaginationEvent): void {
        this.page$.next(page);
        this.size$.next(size);
    }

    protected isMatch(value: unknown): boolean {
        return !!this.search && TUI_DEFAULT_MATCHER(value, this.search);
    }

    protected change({sortKey, sortDirection}: TuiSortChange<User>): void {
        this.sortKey$.next(sortKey!);
        this.direction$.next(sortDirection);
    }

    private getData(
        key: keyof User,
        direction: TuiSortDirection,
        page: number,
        size: number,
        minAge: number,
    ): Observable<ReadonlyArray<User | null>> {
        console.info(`Sort by ${key} , direction : ${direction}`);

        const start = page * size;
        const end = start + size;
        const result = [...DATA]
            .sort(sortBy(key, direction))
            .filter((user) => user.age >= minAge)
            .map((user, index) => (index >= start && index < end ? user : null));

        // Imitating server response
        return timer(Math.random() * 1e3 + 1e3).pipe(map(() => result));
    }
}
```

**LESS:**
```less
.table {
    inline-size: 100%;
}

.filters {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    align-items: center;
}

.input {
    flex: 1;
}

.columns {
    inline-size: 10.625rem;
}

.match {
    background: var(--tui-service-selection-background);
}
```

#### Virtual scroll

**Template:**
```html
<tui-scrollbar>
<cdk-virtual-scroll-viewport #viewport appendOnly tuiScrollable class="viewport tui-zero-scrollbar" [itemSize]="45" [maxBufferPx]="500" [minBufferPx]="400" >
<table tuiTable [columns]="columns" >
<thead>
<tr tuiThGroup>
<th *tuiHead="'name'" tuiTh [sticky]="true" [style.top.px]="-(viewport.getOffsetToRenderedContentStart() || 0)" > Name </th>
<th *tuiHead="'dob'" tuiTh [sticky]="true" [style.top.px]="-(viewport.getOffsetToRenderedContentStart() || 0)" > Date of Birth </th>
<th *tuiHead="'age'" tuiTh [sorter]="ageSorter" [sticky]="true" [style.top.px]="-(viewport.getOffsetToRenderedContentStart() || 0)" > Age </th>
</tr>
</thead>
<tbody tuiTbody>
<tr *cdkVirtualFor="let item of data | tuiTableSort" tuiTr >
<td *tuiCell="'name'" tuiTd > {{ item.name }} </td>
<td *tuiCell="'dob'" tuiTd > {{ item.dob }} </td>
<td *tuiCell="'age'" tuiTd > {{ getAge(item) }} </td>
</tr>
</tbody>
</table>
</cdk-virtual-scroll-viewport>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiComparator, TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiToInt} from '@taiga-ui/cdk';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';

interface User {
    readonly dob: TuiDay;
    readonly name: string;
}

const TODAY = TuiDay.currentLocal();
const FIRST = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'James',
    'Joan',
    'Jim',
    'Julia',
    'Joe',
    'Julia',
];

const LAST = [
    'Smith',
    'West',
    'Brown',
    'Jones',
    'Davis',
    'Miller',
    'Johnson',
    'Jackson',
    'Williams',
    'Wilson',
];

const DATA: readonly User[] = Array.from({length: 300}, () => ({
    name: `${LAST[Math.floor(Math.random() * 10)]}, ${
        FIRST[Math.floor(Math.random() * 10)]
    }`,
    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
}));

function getAge({dob}: User): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = tuiToInt(months > 0 || (!months && days > 9));

    return years + offset;
}

@Component({
    standalone: true,
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiScrollable,
        TuiScrollbar,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = DATA;

    protected readonly columns = ['name', 'dob', 'age'];

    protected readonly getAge = getAge;

    protected readonly ageSorter: TuiComparator<User> = (a: User, b: User) =>
        getAge(a) - getAge(b);
}
```

**LESS:**
```less
table {
    inline-size: 100%;

    tr {
        block-size: 2.8125rem;
    }

    td {
        &:first-child {
            inline-size: 10rem;
            font-weight: bold;
        }

        &:last-child {
            inline-size: 3rem;
        }
    }
}

.viewport {
    block-size: 15.625rem;
}
```

#### Dynamic columns

**Template:**
```html
<button size="s" tuiButton type="button" (click)="addColumn()" > Add column </button>
<button size="s" tuiButton type="button" class="tui-space_left-2" (click)="addRows()" > Add row </button>
<table tuiTable class="table tui-space_top-3" [columns]="columns" >
<thead>
<tr tuiThGroup>
<ng-container *ngFor="let col of columns">
<th *tuiHead="col" tuiTh > {{ col }} </th>
</ng-container>
</tr>
</thead>
<tbody *tuiLet="data | tuiTableSort as sortedData" tuiTbody [data]="sortedData" >
<tr *ngFor="let item of sortedData" tuiTr >
<ng-container *ngFor="let col of columns">
<td *tuiCell="col" tuiTd > {{ item[col] }} </td>
</ng-container>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton, TuiLet, TuiTable],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected data: Array<Record<string, number | string>> = [{id: 1, name: 'name'}];

    protected get columns(): string[] {
        return Object.keys(this.data[0] ?? {});
    }

    protected addColumn(): void {
        this.data = this.data.map((item) => ({
            ...item,
            [`extra-${this.columns.length + 1}`]: `extra column ${
                this.columns.length + 1
            }`,
        }));
    }

    protected addRows(): void {
        this.data = [...this.data, {...this.data[0], id: this.data.length + 1}];
    }
}
```

**LESS:**
```less
.table {
    inline-size: 100%;
}
```

#### Footer

**Template:**
```html
<table tuiTable [style.width.rem]="36" >
<caption tuiCaption>
<span>999 rows</span>
<button appearance="flat" tuiButton tuiButtonSelect type="button" [(ngModel)]="size" > {{ index * size + 1 }}-{{ (index + 1) * size }} rows <tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="content" [items]="items" />
</button>
<tui-pagination [length]="length" [style.float]="'right'" [(index)]="index" />
</caption>
<thead>
<tr tuiThGroup>
<th tuiTh>Name</th>
<th tuiTh>Balance</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of data">
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.balance | tuiFormatNumber | async }}</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiButton, TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        TuiButton,
        TuiButtonSelect,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiPagination,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
        },
        {
            name: 'Roman Sedov',
            balance: 423242,
        },
    ] as const;

    protected index = 4;
    protected length = 10;
    protected size = 10;
    protected readonly items = [10, 50, 100];
    protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
        `${$implicit} items per page`;
}
```

#### Resize a large table

**Template:**
```html
<table tuiTable>
<thead>
<tr tuiThGroup>
<th tuiTh [resizable]="true" > Name </th>
<th tuiTh [resizable]="true" > Items </th>
<th tuiTh [resizable]="true" > Balance </th>
<th tuiTh>Description</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of data">
<td tuiTd>{{ item.name }}</td>
<td tuiTd>
<tui-input-tag [(ngModel)]="item.items">Items</tui-input-tag>
</td>
<td tuiTd>
<tui-input tuiTextfieldPrefix="$" [(ngModel)]="item.balance" > Value </tui-input>
</td>
<td tuiTd [style.white-space]="'nowrap'" > {{ item.description }} </td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {
    TuiInputModule,
    TuiInputTagModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiInputModule,
        TuiInputTagModule,
        TuiTable,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
            items: ['Wallet', 'Phone'],
            description:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
            name: 'Roman Sedov',
            balance: '',
            items: ['Wallet'],
            description:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
    ];
}
```

#### Expandable rows

**Template:**
```html
<table tuiTable class="table" [columns]="columns" >
<thead>
<tr tuiThGroup>
<th tuiTh></th>
<th tuiTh [minWidth]="50" > # </th>
<th tuiTh [minWidth]="150" > Name </th>
<th tuiTh [minWidth]="150" > Date of Birth </th>
<th tuiTh>Age</th>
</tr>
</thead>
<tbody tuiTbody [data]="data" >
<ng-container *ngFor="let item of data; index as i">
<tr tuiTr>
<td *tuiCell="'children'" tuiTd >
<button appearance="flat-grayscale" size="xs" tuiIconButton type="button" class="chevron-btn" [attr.title]="item.children?.length ? '' : 'No children'" [disabled]="!item.children?.length" [style.border-radius]="'100%'" [tuiChevron]="rowState[i] ?? false" (click)="toggleRow(i)" > Toggle </button>
</td>
<td *tuiCell="'#'" tuiTd > {{ i + 1 }} </td>
<td *tuiCell="'name'" tuiTd > {{ item.name }} </td>
<td *tuiCell="'dob'" tuiTd > {{ item.dob }} </td>
<td *tuiCell="'age'" tuiTd > {{ item.age }} </td>
</tr>
<tui-table-expand *ngIf="item.children?.length" [expanded]="rowState[i] ?? false" >
<tr *ngFor="let child of item.children; index as j" tuiTr class="child" >
<td *tuiCell="'children'" tuiTd ></td>
<td *tuiCell="'#'" tuiTd > {{ i + 1 }}.{{ j + 1 }} </td>
<td *tuiCell="'name'" tuiTd > {{ child.name }} </td>
<td *tuiCell="'dob'" tuiTd > {{ child.dob }} </td>
<td *tuiCell="'age'" tuiTd > {{ child.age }} </td>
</tr>
</tui-table-expand>
</ng-container>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiToInt} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

interface User {
    readonly dob: TuiDay;
    readonly name: string;
    readonly age: number;
    children?: User[];
}

const TODAY = TuiDay.currentLocal();

const FIRST = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'James',
    'Joan',
    'Jim',
    'Julia',
    'Joe',
    'Julia',
];

const LAST = [
    'Smith',
    'West',
    'Brown',
    'Jones',
    'Davis',
    'Miller',
    'Johnson',
    'Jackson',
    'Williams',
    'Wilson',
];

const DATA: readonly User[] = Array.from({length: 10}, (_, index) => {
    // From 5 to 0 children
    const childrenCount = 5 - (index % 6),
        user = generateUser();

    user.children = Array.from({length: childrenCount}, () => generateUser());

    return user;
});

function getAge(dob: TuiDay): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = tuiToInt(months > 0 || (!months && days > 9));

    return years + offset;
}

function generateUser(): User {
    const dob = TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
        age = getAge(dob),
        name = `${LAST[getRandom(0, 9)]}, ${FIRST[getRandom(0, 9)]}`;

    return {name, dob, age};
}

function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected columns = ['children', '#', 'name', 'dob', 'age'];
    protected readonly data = DATA;

    protected readonly rowState: Record<number, boolean> = {};

    protected toggleRow(index: number): void {
        this.rowState[index] = !this.rowState[index];
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.table {
    inline-size: 28rem;

    tbody {
        tr {
            td {
                .transition(background);
            }

            &.child td {
                background: var(--tui-background-base-alt);
            }

            &:hover {
                td {
                    background: var(--tui-background-base-alt);
                }

                &.child td {
                    background: var(--tui-background-neutral-1-hover);
                }
            }
        }

        tui-table-expand {
            animation-duration: 0.5s !important;
        }
    }

    [tuiTh] {
        border-top: none;
    }

    [tuiTh],
    [tuiTd] {
        border-inline-start: none;
        border-inline-end: none;
    }

    button[disabled].chevron-btn::after {
        cursor: initial;
    }
}
```

#### Expandable rows: different ways to toggle rows

**Template:**
```html
<table size="l" tuiTable class="table" [columns]="columns" >
<thead>
<tr tuiThGroup>
<th *tuiHead="'action'" tuiTh [sorter]="null" ></th>
<th *tuiHead="'firstName'" tuiTh [sorter]="null" > First name </th>
<th *tuiHead="'lastName'" tuiTh class="last-name-col" [sorter]="null" > Last name </th>
<th *tuiHead="'role'" tuiTh [sorter]="null" > Role </th>
<th *tuiHead="'balance'" tuiTh [sorter]="null" > Balance </th>
</tr>
</thead>
<tbody tuiTbody>
<tr tuiTr class="expand-heading-row" (click)="expand.toggle()" >
<td *tuiCell="'action'" tuiTd >
<button appearance="icon" size="xs" tuiIconButton type="button" [tuiChevron]="expand.expanded()" > Toggle </button>
</td>
<td *tuiCell="'firstName'" tuiTd [colSpan]="2" > {{ basicData.length }} Developers (basic usage) </td>
<ng-container *tuiCell="'lastName'" />
<td *tuiCell="'role'" tuiTd > dev </td>
<td *tuiCell="'balance'" tuiTd > {{ basicData | tuiMapper: getSumBalance | tuiFormatNumber | async }} </td>
</tr>
<tui-table-expand #expand [expanded]="true" >
<tr *ngFor="let item of basicData" tuiTr >
<td *tuiCell="'action'" tuiTd ></td>
<td *tuiCell="'firstName'" tuiTd >
<div>
<tui-chip size="s" [appearance]="item.role === 'dev' ? 'primary' : 'secondary'" > {{ item.firstName }} </tui-chip>
</div>
</td>
<td *tuiCell="'lastName'" tuiTd > {{ item.lastName }} </td>
<td *tuiCell="'role'" tuiTd > {{ item.role }} </td>
<td *tuiCell="'balance'" tuiTd > {{ item.balance | tuiFormatNumber | async }} </td>
</tr>
</tui-table-expand>
</tbody>
<tbody tuiTbody>
<tr tuiTr class="expand-heading-row" (click)="manualToggle()" >
<td *tuiCell="'action'" tuiTd >
<button appearance="icon" size="xs" tuiIconButton type="button" [tuiChevron]="manualOpen" > Toggle </button>
</td>
<td *tuiCell="'firstName'" tuiTd [colSpan]="2" > {{ manualOpenData.length }} Designers (manual handling) </td>
<ng-container *tuiCell="'lastName'" />
<td *tuiCell="'role'" tuiTd > design </td>
<td *tuiCell="'balance'" tuiTd > {{ manualOpenData | tuiMapper: getSumBalance | tuiFormatNumber | async }} </td>
</tr>
<tui-table-expand [expanded]="manualOpen">
<tr *ngFor="let item of manualOpenData" tuiTr >
<td *tuiCell="'action'" tuiTd ></td>
<td *tuiCell="'firstName'" tuiTd > {{ item.firstName }} </td>
<td *tuiCell="'lastName'" tuiTd > {{ item.lastName }} </td>
<td *tuiCell="'role'" tuiTd > {{ item.role }} </td>
<td *tuiCell="'balance'" tuiTd > {{ item.balance | tuiFormatNumber | async }} </td>
</tr>
</tui-table-expand>
</tbody>
<tbody tuiTbody>
<tr tuiTr>
<td *tuiCell="'action'" tuiTd >
<button appearance="flat-grayscale" size="xs" tuiIconButton type="button" [style.border-radius]="'100%'" [tuiChevron]="customOpen" (click)="customToggle()" > Toggle </button>
</td>
<td *tuiCell="'firstName'" tuiTd [colSpan]="2" > Custom content (click on chevron) </td>
<ng-container *tuiCell="'lastName'" />
<td *tuiCell="'role'" tuiTd > all </td>
<td *tuiCell="'balance'" tuiTd > {{ customContentData | tuiMapper: getSumBalance | tuiFormatNumber | async }} </td>
</tr>
<tr>
<td [colSpan]="columns.length">
<tui-expand [expanded]="customOpen">
<div class="chips">
<tui-chip *ngFor="let item of customContentData" size="s" [appearance]="item.role === 'dev' ? 'primary' : 'secondary'" [tuiHint]="'Balance: ' + item.balance + '. Role: ' + item.role" > {{ item.firstName }} {{ item.lastName }} </tui-chip>
</div>
</tui-expand>
</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableExpand} from '@taiga-ui/addon-table';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiButton, TuiFormatNumberPipe, TuiHint} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';
import {TuiChevron, TuiChip} from '@taiga-ui/kit';

interface Item {
    firstName: string;
    lastName: string;
    role: string;
    balance: number;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        TuiButton,
        TuiChevron,
        TuiChip,
        TuiExpand,
        TuiFormatNumberPipe,
        TuiHint,
        TuiMapperPipe,
        TuiTable,
        TuiTableExpand,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly basicData: Item[] = [
        {
            firstName: 'Alex',
            lastName: 'Inkin',
            role: 'dev',
            balance: 1323525,
        },
        {
            firstName: 'Roman',
            lastName: 'Sedov',
            role: 'dev',
            balance: 423242,
        },
        {
            firstName: 'Andrei',
            lastName: 'Serebrennikov',
            role: 'dev',
            balance: 4223242,
        },
    ];

    protected manualOpenData: Item[] = [
        {
            firstName: 'Joe',
            lastName: 'Wilson',
            role: 'design',
            balance: 423242,
        },
        {
            firstName: 'Julia',
            lastName: 'Johnson',
            role: 'design',
            balance: 4223242,
        },
    ];

    protected readonly customContentData: Item[] = [
        ...this.basicData,
        ...this.manualOpenData,
    ];

    protected readonly columns = ['action', 'firstName', 'lastName', 'role', 'balance'];

    protected manualOpen = false;
    protected customOpen = false;

    public getSumBalance(people: Item[]): number {
        return people.reduce((res, item) => {
            res += item.balance;

            return res;
        }, 0);
    }

    protected manualToggle(): void {
        this.manualOpen = !this.manualOpen;
    }

    protected customToggle(): void {
        this.customOpen = !this.customOpen;
    }
}
```

**LESS:**
```less
th {
    white-space: nowrap;
}

.table {
    inline-size: 36rem;
}

.chips {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding: 0.5rem;
}

.last-name-col {
    inline-size: 10rem;
}

.expand-heading-row {
    cursor: pointer;

    td {
        background: var(--tui-background-neutral-1);
    }

    &:hover td {
        background: var(--tui-background-neutral-1-hover);
    }
}

.expand-heading-row-custom {
    td {
        background: var(--tui-background-neutral-1);
    }

    td.expand-heading-row-custom__expand:hover {
        cursor: pointer;
        background: var(--tui-background-neutral-1-hover);
    }
}
```

#### Manual sorting

**Template:**
```html
<table tuiTable [columns]="columns" [direction]="direction()" [tuiSortBy]="sortBy()" (tuiSortChange)="sortChange($event)" >
<thead>
<tr tuiThGroup>
<th *tuiHead="'name'" tuiSortable tuiTh [maxWidth]="500" [minWidth]="200" [resizable]="true" > Name </th>
<th *tuiHead="'id'" tuiSortable tuiTh > ID </th>
<th *tuiHead="'color'" tuiSortable tuiTh > Color </th>
</tr>
</thead>
<tbody tuiTbody [data]="data()" >
<tr *ngFor="let item of data()" tuiTr >
<td *tuiCell="'id'" tuiTd > {{ item.id }} </td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiSortChange, TuiTable} from '@taiga-ui/addon-table';

interface Data {
    id: number;
    name: string;
    color: string;
}

@Component({
    standalone: true,
    imports: [NgForOf, TuiTable],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly initial = [
        {
            name: 'Apple',
            id: 1,
            color: 'red',
        },
        {
            name: 'Banana',
            id: 2,
            color: 'yellow',
        },
        {
            name: 'Kiwi',
            id: 3,
            color: 'green',
        },
        {
            name: 'Orange',
            id: 4,
            color: 'orange',
        },
        {
            name: 'Grapes',
            id: 5,
            color: 'purple',
        },
        {
            name: 'Strawberry',
            id: 6,
            color: 'red',
        },
        {
            name: 'Blueberry',
            id: 7,
            color: 'blue',
        },
        {
            name: 'Pineapple',
            id: 8,
            color: 'yellow',
        },
        {
            name: 'Mango',
            id: 9,
            color: 'orange',
        },
        {
            name: 'Watermelon',
            id: 10,
            color: 'green',
        },
        {
            name: 'Peach',
            id: 11,
            color: 'orange',
        },
        {
            name: 'Pear',
            id: 12,
            color: 'green',
        },
        {
            name: 'Cherry',
            id: 13,
            color: 'red',
        },
        {
            name: 'Lemon',
            id: 14,
            color: 'yellow',
        },
        {
            name: 'Lime',
            id: 15,
            color: 'green',
        },
        {
            name: 'Pomegranate',
            id: 16,
            color: 'red',
        },
        {
            name: 'Raspberry',
            id: 17,
            color: 'red',
        },
        {
            name: 'Blackberry',
            id: 18,
            color: 'purple',
        },
        {
            name: 'Cantaloupe',
            id: 19,
            color: 'orange',
        },
        {
            name: 'Plum',
            id: 20,
            color: 'purple',
        },
    ] as const;

    protected readonly columns = Object.keys(this.initial[0]);
    protected readonly direction = signal<-1 | 1>(-1);
    protected readonly sortBy = signal<keyof Data | null>('color');
    protected readonly data = computed<readonly Data[]>(() => {
        const direction = this.direction();
        const key = this.sortBy();

        return key
            ? [...this.initial].sort((a, b) => {
                  const valA = a[key];
                  const valB = b[key];

                  if (typeof valA === 'string' && typeof valB === 'string') {
                      return valA.localeCompare(valB) * direction;
                  }

                  if (typeof valA === 'number' && typeof valB === 'number') {
                      return (valA - valB) * direction;
                  }

                  return 0;
              })
            : this.initial;
    });

    protected sortChange({sortKey, sortDirection}: TuiSortChange<Data>): void {
        this.sortBy.set(sortKey);
        this.direction.set(sortDirection);
    }
}
```

#### Disabled rows

**Template:**
```html
<table tuiTable [style.width.rem]="30" [(ngModel)]="selected" >
<thead>
<tr>
<th tuiTh>
<input tuiCheckbox tuiCheckboxTable type="checkbox" />
</th>
<th tuiTh>Name</th>
<th tuiTh>Price</th>
<th tuiTh>Status</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of data">
<td tuiTd>
<input tuiCheckbox type="checkbox" [disabled]="!item.available" [tuiCheckboxRow]="item" />
</td>
<td tuiTd>{{ item.name }}</td>
<td tuiTd>${{ item.price }}</td>
<td tuiTd>{{ item.available ? 'In stock' : 'Out of stock' }}</td>
</tr>
</tbody>
</table>
<p>Selected: {{ selected.length }}</p>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {TuiCheckbox} from '@taiga-ui/kit';

interface Item {
    readonly name: string;
    readonly price: number;
    readonly available: boolean;
}

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiCheckbox, TuiTable, TuiTableControl],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data: readonly Item[] = [
        {name: 'Apple', price: 3, available: true},
        {name: 'Banana', price: 2, available: false},
        {name: 'Kiwi', price: 5, available: true},
        {name: 'Orange', price: 4, available: false},
        {name: 'Grapes', price: 7, available: true},
    ];

    protected selected: readonly Item[] = [this.data[3]!];
}
```

Parent directive that sets the table up.

Used on
`thead`
to make it sticky

Used inside
`thead`
to layout headings for the columns. You can have multiple rows and use
`rowSpan`
on
`th`
elements if you want to create some complex heading for your table.

Used inside
`tr[tuiThGroup]`
to style heading cells.

Makes this column resizable

| null"
>
Sorter function for this column

Makes heading cell horizontally sticky

Sets up a group of data. You can have multiple
`tbody`
inside your table.

Optional heading content for the group that makes it collapsable

Open/collapsed state of the group

Used inside
`tbody`
to layout cells.

## td[tuiTd] or th[tuiTd]

A cell directive to be placed in
`tr`
of
`tbody`
. Use it on
`th`
if you want to make a sticky column

Used to define template for
_heading_
for particular key

Goes inside
`tr`
element inside
`thead`

Used to define template for
_cell_
for particular key
