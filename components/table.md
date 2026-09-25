# Table

- **Package**: `ADDON-TABLE`
- **Type**: components

This module allows you to create various tables, both static and editable.

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [columns] | `readonly string[]` | an array of keys to set up columns order |
| [size] | `TuiSizeS | TuiSizeL` | cells size |
| [(sorter)] | `TuiComparator<T>` | sort function (basic JavaScript array sort API) |
| [(direction)] | `-1 | 1` | direction for sorting |

### Usage Examples

#### Basic

Most minimalistic usage example.

**Template:**
```html
<table tuiTable>
<thead>
<tr>
<th tuiTh>Name</th>
<th tuiTh>Balance</th>
</tr>
</thead>
<tbody tuiTbody> @for (item of data; track item) { <tr>
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.balance | tuiFormatNumber }}</td>
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiFormatNumberPipe, TuiTable],
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
}
```

#### Custom

Using various components within table cells.

**Template:**
```html
<div [style.margin-block-end.rem]="2">
<tui-radio-list [itemContent]="content" [items]="sizes" [style.flex-direction]="'row'" [style.width]="'max-content'" [(ngModel)]="size" />
<ng-template #content let-value > @let text = value === 'm' ? 'Medium' : 'Large'; {{ value === 's' ? 'Small' : text }} </ng-template>
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
<tbody tuiTbody> @for (item of data; track item) { <tr>
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
<tui-icon [icon]="item.title.icon" /> {{ item.title.title }} @if (item.title.chip && item.title.subtitle) { <span tuiChip>{{ item.title.chip }}</span> } </span> @if (!item.title.subtitle && item.title.chip) { <span tuiChip> {{ item.title.chip }} </span> } @else { <span tuiSubtitle> {{ item.title.subtitle }} </span> } </span>
</div>
</td>
<td tuiTd>
<div [tuiCell]="size">
<div [style.background]="item.cell.name | tuiAutoColor" [tuiAvatar]="item.cell.name | tuiInitials" ></div>
<span tuiTitle> {{ item.cell.name }} <span tuiSubtitle>{{ item.cell.email }}</span>
</span>
</div>
</td>
<td tuiTd>
<span [tuiStatus]="item.status.color">{{ item.status.value }}</span>
</td>
<td tuiTd>
<tui-items-with-more> @for (chip of item.items; track chip) { <div *tuiItem tuiBadge [style.margin-inline-end.rem]="0.25" > {{ chip }} </div> } <ng-template let-number tuiMore >
<button appearance="action-grayscale" tuiDropdownAlign="end" tuiDropdownAuto tuiLink type="button" [style.text-decoration-style]="'dashed'" [tuiDropdown]="dropdown" > + {{ item.items.length - number - 1 }} </button>
<ng-template #dropdown>
<div tuiItemGroup [style.padding]="'1rem 0.75rem 0.75rem 1rem'" > @for (chip of item.items; track chip) { @if ($index > number) { <div tuiBadge>{{ chip }}</div> } } </div>
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
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAutoColorPipe,
    TuiAvatar,
    TuiBadge,
    TuiChip,
    TuiInitialsPipe,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
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
        TuiItemGroup,
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
    styleUrl: './index.less',
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

Using editable textfield controls inside a table.

**Template:**
```html
<tui-scrollbar waIntersectionRoot class="scrollbar" >
<table size="l" tuiTable class="table" [columns]="columns" [direction]="-1" [sorter]="totalSorter" >
<thead tuiThead>
<tr tuiThGroup>
<th *tuiHead="'name'" rowspan="2" tuiTh class="first" [sorter]="null" [sticky]="true" > Name </th>
<th *tuiHead="'price'" rowspan="2" tuiTh class="number second" [sticky]="true" > Price,&nbsp;$ </th>
<th *tuiHead="'quantity'" colspan="2" tuiTh [sorter]="null" > Purchase </th>
<ng-container *tuiHead="'unit'" />
<th *tuiHead="'date'" rowspan="2" tuiTh [minWidth]="155" > Date </th>
<th *tuiHead="'total'" rowspan="2" tuiTh class="number" [sorter]="totalSorter" > Total </th>
</tr>
<tr tuiThGroup>
<th *tuiHead="'quantity'" tuiTh class="number border" > Quantity </th>
<th *tuiHead="'unit'" tuiTh > Units </th>
</tr>
</thead> @let sortedPythons = pythons | tuiTableSort; <tbody heading="Monty Python" tuiTbody [data]="sortedPythons" > @for (item of sortedPythons; track trackByIndex($index)) { <tr tuiTr>
<th *tuiCell="'name'" tuiTd [colSpan]="item.price > 1000 ? 2 : 0" >
<tui-textfield>
<textarea tuiTextarea [ngModel]="item.name" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'name', item, pythons)" ></textarea>
</tui-textfield>
</th>
<ng-container *tuiCell="'price'"> @if (item.price <= 1000) { <th tuiTd class="second" >
<tui-textfield>
<input tuiInputNumber class="number" [ngModel]="item.price" [ngModelOptions]="options" [tuiValidator]="minPrice" (ngModelChange)="onValueChange($event, 'price', item, pythons)" />
</tui-textfield>
</th> } </ng-container>
<td *tuiCell="'quantity'" tuiTd >
<tui-textfield>
<input tuiInputNumber [ngModel]="item.quantity" [ngModelOptions]="options" [tuiNumberFormat]="{precision: 0}" (ngModelChange)="onValueChange($event, 'quantity', item, pythons)" />
</tui-textfield>
</td>
<td *tuiCell="'unit'" tuiTd >
<tui-textfield tuiChevron class="select" >
<input placeholder="Units" tuiSelect [ngModel]="item.unit" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'unit', item, pythons)" />
<tui-data-list-wrapper *tuiDropdown [items]="units" />
</tui-textfield>
</td>
<td *tuiCell="'date'" tuiTd >
<tui-textfield>
<input tuiInputDate [ngModel]="item.date" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'date', item, pythons)" />
<tui-calendar *tuiDropdown />
</tui-textfield>
</td>
<td *tuiCell="'total'" tuiTd class="number text" > {{ getTotal(item) | tuiFormatNumber }} </td>
</tr> } </tbody> @let sortedStarwars = starwars | tuiTableSort; <tbody tuiTbody [data]="sortedStarwars" [heading]="template" > @for (item of sortedStarwars; track trackByIndex($index)) { <tr tuiTr>
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
<input placeholder="Units" tuiSelect [ngModel]="item.unit" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'unit', item, starwars)" />
<tui-data-list-wrapper *tuiDropdown [items]="units" />
</tui-textfield>
</td>
<td *tuiCell="'date'" tuiTd >
<tui-textfield>
<input tuiInputDate [ngModel]="item.date" [ngModelOptions]="options" (ngModelChange)="onValueChange($event, 'date', item, starwars)" />
<tui-calendar *tuiDropdown />
</tui-textfield>
</td>
<td *tuiCell="'total'" tuiTd class="number text" > {{ getTotal(item) | tuiFormatNumber }} </td>
</tr> } </tbody>
</table>
</tui-scrollbar>
<ng-template #template>
<tui-icon icon="@tui.star" class="tui-space_right-3" /> Star Wars </ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, type ValidatorFn} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {type TuiComparator, TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiDefaultSort, TuiValidator} from '@taiga-ui/cdk';
import {
    TuiIcon,
    TuiNumberFormat,
    TuiScrollbar,
    tuiScrollbarOptionsProvider,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    TuiInputDate,
    TuiInputNumber,
    TuiSelect,
    TuiTextarea,
} from '@taiga-ui/kit';

interface Item {
    readonly date: TuiDay;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly unit: string;
}

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiIcon,
        TuiInputDate,
        TuiInputNumber,
        TuiNumberFormat,
        TuiScrollbar,
        TuiSelect,
        TuiTable,
        TuiTextarea,
        TuiValidator,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiScrollbarOptionsProvider({mode: 'hidden'})],
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

    protected readonly columns = [
        'name',
        'price',
        'quantity',
        'unit',
        'date',
        'total',
    ] as const;

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
    min-inline-size: 11rem;
    max-inline-size: 11rem;
}

.second {
    inset-inline-start: 11rem;
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

#### Sorting

Using `SortBy` directive to work with column titles instead of manual sorters.

**Template:**
```html
<p tuiTextfieldSize="m" class="filters" >
<tui-textfield class="input">
<label tuiLabel>Find on page</label>
<input tuiInput [(ngModel)]="search" />
</tui-textfield>
<tui-textfield>
<label tuiLabel>Minimum age</label>
<input tuiInputNumber [formControl]="minAge" [tuiNumberFormat]="{precision: 0}" />
</tui-textfield>
</p>
<p class="filters">
<label tuiLabel>
<input tuiCheckbox type="checkbox" [(ngModel)]="dob" /> Enable sorting by DOB </label>
<button size="m" tuiButton tuiChevron tuiDropdownAuto type="button" [tuiDropdown]="dropdown" > Columns </button>
<ng-template #dropdown>
<tui-reorder class="columns" [enabled]="enabled" [(items)]="initial" (enabledChange)="onEnabled($event)" />
</ng-template>
</p>
<tui-loader [loading]="!!(loading$ | async)" [overlay]="true" >
<p>
<b>Sort key:</b> {{ sortKey$ | async }}, <b>direction:</b> {{ direction$ | async }} </p> @if (data$ | async; as data) { <table tuiTable class="table" [columns]="columns" [direction]="(direction$ | async) ?? -1" [tuiSortBy]="sortKey$ | async" (tuiSortChange)="change($event)" >
<thead>
<tr tuiThGroup>
<th *tuiHead="'name'" tuiSortable tuiTh [requiredSort]="true" > Name </th>
<th *tuiHead="'dob'" tuiTh [tuiSortable]="dob" > Date of Birth </th>
<th *tuiHead="'age'" tuiSortable tuiTh [requiredSort]="true" > Age </th>
</tr>
</thead> @let sortedData = data | tuiTableSort; <tbody tuiTbody [data]="sortedData" > @for (item of sortedData; track item) { <tr tuiTr>
<td *tuiCell="'name'" tuiTd [class.match]="isMatch(item.name)" > {{ item.name }} </td>
<td *tuiCell="'dob'" tuiTd [class.match]="isMatch(item.dob)" > {{ item.dob }} </td>
<td *tuiCell="'age'" tuiTd [class.match]="isMatch(item.age)" > {{ item.age }} </td>
</tr> } </tbody>
<tfoot>
<tr>
<td [colSpan]="columns.length">
<tui-table-pagination class="tui-space_top-2" [page]="(page$ | async) || 0" [total]="(total$ | async) || 0" (paginationChange)="onPagination($event)" />
</td>
</tr>
</tfoot>
</table> } </tui-loader>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
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
    tuiIsPresent,
    tuiToInt,
} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCheckbox,
    TuiDropdown,
    TuiInput,
    TuiLabel,
    TuiLoader,
    TuiNumberFormat,
} from '@taiga-ui/core';
import {TuiChevron, TuiInputNumber} from '@taiga-ui/kit';
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
    imports: [
        AsyncPipe,
        FormsModule,
        ReactiveFormsModule,
        TuiButton,
        TuiCheckbox,
        TuiChevron,
        TuiDropdown,
        TuiInput,
        TuiInputNumber,
        TuiLabel,
        TuiLoader,
        TuiNumberFormat,
        TuiReorder,
        TuiTable,
        TuiTablePagination,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
    protected readonly loading$ = this.request$.pipe(map((v) => !v));

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

Using `ScrollingModule` from @angular/cdk/scrolling to implement virtual scroll and `tuiSorter` pipe for easy sorting by key.

**Template:**
```html
<cdk-virtual-scroll-viewport #viewport appendOnly tuiScrollRef class="viewport" [itemSize]="45" [maxBufferPx]="500" [minBufferPx]="400" >
<tui-scroll-controls />
<table tuiTable>
<thead>
<tr [style.inset-block-start.px]="-(viewport.getOffsetToRenderedContentStart() || 0)">
<th tuiTh [sorter]="'name' | tuiSorter" [sticky]="true" > Name </th>
<th tuiTh [sorter]="'dob' | tuiSorter" [sticky]="true" > Date of Birth </th>
<th tuiTh [sorter]="ageSorter" [sticky]="true" > Age </th>
</tr>
</thead>
<tbody tuiTbody>
<tr *cdkVirtualFor="let item of data | tuiTableSort">
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.dob }}</td>
<td tuiTd>{{ getAge(item) }}</td>
</tr>
</tbody>
</table>
</cdk-virtual-scroll-viewport>
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
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core';

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
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiScrollControls,
        TuiScrollRef,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = DATA;
    protected readonly getAge = getAge;

    protected readonly ageSorter: TuiComparator<User> = (a: User, b: User) =>
        getAge(a) - getAge(b);
}
```

**LESS:**
```less
table {
    inline-size: 100%;

    th {
        inset-block-start: inherit;
    }

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

#### Columns

Using structural directives for dynamic columns.

**Template:**
```html
<button size="s" tuiButton type="button" (click)="addColumn()" > Add column </button>
<button size="s" tuiButton type="button" class="tui-space_left-2" (click)="addRows()" > Add row </button>
<table tuiTable class="table tui-space_top-3" [columns]="columns" >
<thead>
<tr tuiThGroup> @for (col of columns; track col) { <th *tuiHead="col" tuiTh > {{ col }} </th> } </tr>
</thead> @let sortedData = data | tuiTableSort; <tbody tuiTbody [data]="sortedData" > @for (item of sortedData; track item) { <tr tuiTr> @for (col of columns; track col) { <td *tuiCell="col" tuiTd > {{ item[col] }} </td> } </tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

Using `caption` tag to place pagination at the bottom of the table.

**Template:**
```html
<table tuiTable [style.width.rem]="36" >
<caption tuiCaption>
<span>999 rows</span>
<button appearance="flat" tuiButton tuiButtonSelect [(ngModel)]="size" > {{ index * size + 1 }}-{{ (index + 1) * size }} rows <tui-data-list-wrapper *tuiDropdown [itemContent]="content" [items]="items" />
</button>
<tui-pagination [length]="length" [style.float]="'right'" [(index)]="index" />
</caption>
<thead>
<tr>
<th tuiTh>Name</th>
<th tuiTh>Balance</th>
</tr>
</thead>
<tbody tuiTbody> @for (item of data; track item) { <tr>
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.balance | tuiFormatNumber }}</td>
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {
    TuiButtonSelect,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    TuiPagination,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
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

#### Resizing

Making column headers draggable at the edge and setting width limits.

**Template:**
```html
<table tuiTable>
<thead>
<tr>
<th tuiTh [maxWidth]="300" [minWidth]="150" [resizable]="true" > Name </th>
<th tuiTh [maxWidth]="300" [minWidth]="100" [resizable]="true" > Items </th>
<th tuiTh [maxWidth]="200" [minWidth]="100" [resizable]="true" > Balance </th>
</tr>
</thead>
<tbody tuiTbody> @for (item of data; track item) { <tr>
<td tuiTd> {{ item.name }} </td>
<td tuiTd>
<tui-textfield multi>
<input tuiInputChip [(ngModel)]="item.items" />
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield>
<input placeholder="Value" prefix="$" tuiInputNumber [style.height.%]="100" [(ngModel)]="item.balance" />
</tui-textfield>
</td>
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip, TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiInputChip,
        TuiInputNumber,
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
            items: ['Wallet', 'Phone'],
        },
        {
            name: 'Roman Sedov',
            balance: '',
            items: ['Wallet'],
        },
    ];
}
```

#### Expandable rows

Animated expandable sections of the table.

**Template:**
```html
<table tuiTable>
<thead>
<tr>
<th tuiTh></th>
<th tuiTh>#</th>
<th tuiTh>Name</th>
<th tuiTh>Date of Birth</th>
</tr>
</thead> @for (item of data; track $index; let i = $index) { <tbody tuiTbody>
<tr>
<td tuiTd>
<button appearance="flat-grayscale" size="xs" tuiIconButton type="button" [attr.title]="item.children.length ? null : 'No children'" [disabled]="!item.children.length" [style.border-radius.%]="100" [tuiChevron]="state[i] ?? false" (click)="state[i] = !state[i]" > Toggle </button>
</td>
<td tuiTd>{{ i + 1 }}</td>
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.dob }}</td>
</tr>
</tbody>
<tbody tuiTableExpand [expanded]="state[i] ?? false" > @if (item.children.length) { @for (child of item.children; track $index; let j = $index) { <tr>
<td tuiTd></td>
<td tuiTd>{{ i + 1 }}.{{ j + 1 }}</td>
<td tuiTd>{{ child.name }}</td>
<td tuiTd>{{ child.dob }}</td>
</tr> } } </tbody> } </table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiChevron, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly state: Record<number, boolean> = {};

    protected readonly data = [
        {
            dob: new TuiDay(1947, 6, 30),
            name: 'John Matrix',
            children: [
                {
                    dob: new TuiDay(1975, 6, 15),
                    name: 'Jenny Matrix',
                },
            ],
        },
        {
            dob: new TuiDay(1946, 6, 4),
            name: 'John Rambo',
            children: [],
        },
        {
            dob: new TuiDay(1955, 2, 19),
            name: 'John McClane',
            children: [
                {
                    dob: new TuiDay(1982, 7, 10),
                    name: 'Lucy McClane',
                },
                {
                    dob: new TuiDay(1985, 3, 5),
                    name: 'Jack McClane',
                },
            ],
        },
    ] as const;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

tui-table-expand {
    td {
        background: var(--tui-background-base-alt);
    }

    tr:hover td {
        background: var(--tui-background-neutral-1-hover);
    }
}

tr:hover td {
    background: var(--tui-background-base-alt);
}

[tuiTh] {
    border-block-start: none;
}

[tuiTh],
[tuiTd] {
    min-inline-size: 3rem;
    border-inline: none;
    white-space: nowrap;
}
```

#### Toggle rows

More complex examples of expandable sections.

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
<td *tuiCell="'balance'" tuiTd > {{ basicData | tuiMapper: getSumBalance | tuiFormatNumber }} </td>
</tr>
</tbody>
<tbody #expand tuiTableExpand [expanded]="true" > @for (item of basicData; track item) { <tr tuiTr>
<td *tuiCell="'action'" tuiTd ></td>
<td *tuiCell="'firstName'" tuiTd >
<div>
<span size="s" tuiChip [appearance]="item.role === 'dev' ? 'primary' : 'secondary'" > {{ item.firstName }} </span>
</div>
</td>
<td *tuiCell="'lastName'" tuiTd > {{ item.lastName }} </td>
<td *tuiCell="'role'" tuiTd > {{ item.role }} </td>
<td *tuiCell="'balance'" tuiTd > {{ item.balance | tuiFormatNumber }} </td>
</tr> } </tbody>
<tbody tuiTbody>
<tr tuiTr class="expand-heading-row" (click)="manualToggle()" >
<td *tuiCell="'action'" tuiTd >
<button appearance="icon" size="xs" tuiIconButton type="button" [tuiChevron]="manualOpen" > Toggle </button>
</td>
<td *tuiCell="'firstName'" tuiTd [colSpan]="2" > {{ manualOpenData.length }} Designers (manual handling) </td>
<ng-container *tuiCell="'lastName'" />
<td *tuiCell="'role'" tuiTd > design </td>
<td *tuiCell="'balance'" tuiTd > {{ manualOpenData | tuiMapper: getSumBalance | tuiFormatNumber }} </td>
</tr>
</tbody>
<tbody tuiTableExpand [expanded]="manualOpen" > @for (item of manualOpenData; track item) { <tr tuiTr>
<td *tuiCell="'action'" tuiTd ></td>
<td *tuiCell="'firstName'" tuiTd > {{ item.firstName }} </td>
<td *tuiCell="'lastName'" tuiTd > {{ item.lastName }} </td>
<td *tuiCell="'role'" tuiTd > {{ item.role }} </td>
<td *tuiCell="'balance'" tuiTd > {{ item.balance | tuiFormatNumber }} </td>
</tr> } </tbody>
<tbody tuiTbody>
<tr tuiTr>
<td *tuiCell="'action'" tuiTd >
<button appearance="flat-grayscale" size="xs" tuiIconButton type="button" [style.border-radius.%]="100" [tuiChevron]="customOpen" (click)="customToggle()" > Toggle </button>
</td>
<td *tuiCell="'firstName'" tuiTd [colSpan]="2" > Custom content (click on chevron) </td>
<ng-container *tuiCell="'lastName'" />
<td *tuiCell="'role'" tuiTd > all </td>
<td *tuiCell="'balance'" tuiTd > {{ customContentData | tuiMapper: getSumBalance | tuiFormatNumber }} </td>
</tr>
<tr>
<td [colSpan]="columns.length">
<tui-expand [expanded]="customOpen">
<div class="chips"> @for (item of customContentData; track item) { <span size="s" tuiChip [appearance]="item.role === 'dev' ? 'primary' : 'secondary'" [tuiHint]="`Balance: ${item.balance}. Role: ${item.role}`" > {{ item.firstName }} {{ item.lastName }} </span> } </div>
</tui-expand>
</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand, TuiHint} from '@taiga-ui/core';
import {TuiChevron, TuiChip, TuiFormatNumberPipe} from '@taiga-ui/kit';

interface Item {
    firstName: string;
    lastName: string;
    role: string;
    balance: number;
}

@Component({
    imports: [
        TuiButton,
        TuiChevron,
        TuiChip,
        TuiExpand,
        TuiFormatNumberPipe,
        TuiHint,
        TuiMapperPipe,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected readonly customContentData = [...this.basicData, ...this.manualOpenData];
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
```

#### Controls

All unique textfield controls in their table representation.

**Template:**
```html
<table tuiTable [style.width.%]="100" [tuiTextfieldCleaner]="false" >
<thead>
<tr>
<th tuiTh [style.width.%]="50" > Growing height </th>
<th tuiTh [style.width.%]="50" > Static height </th>
</tr>
</thead>
<tbody tuiTbody>
<tr>
<td tuiTd>
<tui-textfield>
<textarea placeholder="Textarea" tuiTextarea [(ngModel)]="textarea" ></textarea>
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield>
<input placeholder="Default table style" tuiInput [(ngModel)]="input" />
</tui-textfield>
</td>
</tr>
<tr>
<td tuiTd>
<tui-textfield>
<input placeholder="Number" tuiInputNumber [(ngModel)]="number" />
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield>
<input placeholder="Number with step" tuiInputNumber [step]="10" [(ngModel)]="numberStep" />
</tui-textfield>
</td>
</tr>
<tr>
<td tuiTd>
<tui-textfield multi>
<input placeholder="InputChip" tuiInputChip [(ngModel)]="chip" />
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield tuiChevron> @if (isMobile) { <select aria-label="Select" placeholder="Select" tuiSelect [items]="items" [(ngModel)]="select" ></select> } @if (!isMobile) { <input placeholder="Select" tuiSelect [(ngModel)]="select" /> } @if (!isMobile) { <tui-data-list-wrapper *tuiDropdown [items]="items" /> } </tui-textfield>
</td>
</tr>
<tr>
<td tuiTd>
<tui-textfield multi tuiChevron >
<select aria-label="MultiSelect" placeholder="MultiSelect" tuiMultiSelect [items]="items" [(ngModel)]="multiselect" ></select>
<tui-input-chip *tuiItem />
</tui-textfield>
</td>
<td tuiTd [style.z-index]="2" >
<tui-textfield>
<input placeholder="InputSlider" tuiInputSlider [max]="1000" [min]="0" [(ngModel)]="slider" />
<input tuiSlider type="range" />
</tui-textfield>
</td>
</tr>
<tr>
<td tuiTd>
<tui-textfield multi>
<input placeholder="InputDateMulti" tuiInputDateMulti [(ngModel)]="date" />
<tui-calendar *tuiDropdown />
</tui-textfield>
</td>
<td tuiTd [style.z-index]="1" >
<tui-input-range [max]="1000" [min]="0" [(ngModel)]="range" />
</td>
</tr>
<tr>
<td colspan="2" tuiTd >
<tui-input-card-group [(ngModel)]="card"> @if (!card) { InputCardGroup } </tui-input-card-group>
</td>
</tr>
<tr>
<td tuiTd>
<tui-textfield [style.margin.rem]="0.5">
<input placeholder="Default textfield style" tuiInput tuiTextfieldAppearance="textfield" [(ngModel)]="input" />
</tui-textfield>
</td>
<td tuiTd>
<tui-textfield multi tuiChevron [style.margin.rem]="0.5" >
<select aria-label="MultiSelect" placeholder="MultiSelect" tuiMultiSelect tuiTextfieldAppearance="textfield" [items]="items" [(ngModel)]="multiselect" ></select>
<tui-input-chip *tuiItem />
</tui-textfield>
</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiInputCardGroup} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiInput} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiInputDateMulti,
    TuiInputNumber,
    TuiInputRange,
    TuiInputSlider,
    TuiMultiSelect,
    TuiSelect,
    TuiTextarea,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInput,
        TuiInputCardGroup,
        TuiInputChip,
        TuiInputDateMulti,
        TuiInputNumber,
        TuiInputRange,
        TuiInputSlider,
        TuiMultiSelect,
        TuiSelect,
        TuiTable,
        TuiTextarea,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected textarea = '';
    protected number = null;
    protected numberStep = null;
    protected input = '';
    protected chip = [];
    protected multiselect = [];
    protected date = [];
    protected select = null;
    protected slider = null;
    protected range = null;
    protected card = null;
    protected readonly items = ['One', 'Two', 'Three', 'Four', 'Five'];
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
```

Parent directive that sets the table up.

Optionally used on
`thead`
to make it sticky

Used inside
`thead`
to layout headings for the columns. You can have multiple rows and use
`rowSpan`
on
`th`
elements if you want to create some complex heading for your table.

**Only necessary when you are using structural `*tuiHead` directives.**

Used inside the heading to style heading cells.

Sets up a group of data. You can have multiple
`tbody`
inside your table.

Used inside
`tbody`
to layout cells.

**Only necessary when you are using structural `*tuiCell` directives.**

## td[tuiTd] or th[tuiTd]

A cell directive to be placed in
`tr`
of
`tbody`
. Use it on
`th`
if you want to make a sticky column

Textfield controls inside
`tuiTd`
are styled to fit table cells. To keep the default textfield look, use
`tuiTextfieldAppearance="textfield"`
on control element.

Used to define template for
_heading_
for particular key

Goes inside
`tr[tuiThGroup]`
element inside
`thead`

Used to define template for
_cell_
for particular key

Goes inside
`tr[tuiTr]`
element
