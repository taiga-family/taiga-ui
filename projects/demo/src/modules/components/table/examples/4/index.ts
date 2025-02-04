import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {
    TuiComparator,
    TuiSortAndOrder,
    TuiTablePaginationEvent,
} from '@taiga-ui/addon-table';
import {TuiReorder, TuiTable, TuiTablePagination} from '@taiga-ui/addon-table';
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
import type {Observable} from 'rxjs';
import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    filter,
    map,
    share,
    startWith,
    switchMap,
    tap,
    timer,
} from 'rxjs';

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

type Key = 'age' | 'dob' | 'name';

const DATA: readonly User[] = Array.from({length: 300}, () => ({
    name: `${LAST[Math.floor(Math.random() * 10)]}, ${
        FIRST[Math.floor(Math.random() * 10)]
    }`,
    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
}));

const KEYS: Record<string, Key> = {
    Name: 'name',
    Age: 'age',
    'Date of Birth': 'dob',
};

function sortBy(key: 'age' | 'dob' | 'name', direction: -1 | 1): TuiComparator<User> {
    return (a, b) =>
        key === 'age'
            ? direction * tuiDefaultSort(getAge(a), getAge(b))
            : direction * tuiDefaultSort(a[key], b[key]);
}

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

    protected readonly direction$ = new BehaviorSubject<-1 | 1>(-1);
    protected readonly sorter$ = new BehaviorSubject<Key>('name');

    protected readonly minAge = new FormControl(21);
    protected readonly minAge$ = tuiControlValue<number>(this.minAge).pipe(
        debounceTime(1000),
        tap(() => this.page$.next(0)),
    );

    protected readonly request$ = combineLatest([
        this.sorter$,
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

    protected readonly getAge = getAge;

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

    protected change<T>({sortBy, orderBy}: TuiSortAndOrder<T>): void {
        this.sorter$.next(sortBy as Key);
        this.direction$.next(orderBy);
    }

    private getData(
        key: 'age' | 'dob' | 'name',
        direction: -1 | 1,
        page: number,
        size: number,
        minAge: number,
    ): Observable<ReadonlyArray<User | null>> {
        console.info('Making a request');

        const start = page * size;
        const end = start + size;
        const result = [...DATA]
            .sort(sortBy(key, direction))
            .filter((user) => getAge(user) >= minAge)
            .map((user, index) => (index >= start && index < end ? user : null));

        // Imitating server response
        return timer(3000).pipe(map(() => result));
    }
}
