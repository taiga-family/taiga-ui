import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe} from '@angular/common';
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
        name = \`\${LAST[Math.floor(Math.random() * 10)]}, \${FIRST[Math.floor(Math.random() * 10)]}\`;

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
        console.info(\`Sort by \${key} , direction : \${direction}\`);

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
`;export{o as default};
