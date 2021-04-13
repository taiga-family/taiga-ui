import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {defaultSort, TuiComparator} from '@taiga-ui/addon-table';
import {
    isPresent,
    TUI_DEFAULT_MATCHER,
    TuiDay,
    tuiReplayedValueChangesFrom,
} from '@taiga-ui/cdk';
import {TUI_ARROW} from '@taiga-ui/kit';
import {BehaviorSubject, combineLatest, Observable, Subject, timer} from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    mapTo,
    share,
    startWith,
    switchMap,
} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface User {
    readonly name: string;
    readonly dob: TuiDay;
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

type Key = 'name' | 'dob' | 'age';

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

@Component({
    selector: 'tui-table-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTableExample4 {
    readonly sorters: Record<Key, TuiComparator<User>> = {
        name: () => 0,
        dob: () => 0,
        age: () => 0,
    };

    readonly direction$ = new BehaviorSubject<-1 | 1>(1);

    readonly sorter$ = new BehaviorSubject<TuiComparator<User>>(this.sorters.name);

    readonly minAge = new FormControl(21);

    private readonly size$ = new Subject<number>();

    private readonly page$ = new Subject<number>();

    private readonly request$ = combineLatest([
        this.sorter$.pipe(map(sorter => getKey(sorter, this.sorters))),
        this.direction$,
        this.page$.pipe(startWith(0)),
        this.size$.pipe(startWith(10)),
        tuiReplayedValueChangesFrom<number>(this.minAge),
    ]).pipe(
        // zero time debounce for a case when both key and direction change
        debounceTime(0),
        switchMap(query => this.getData(...query).pipe(startWith(null))),
        share(),
    );

    initial = ['Name', 'Date of Birth', 'Age'];

    enabled = this.initial;

    columns = ['name', 'dob', 'age'];

    search = '';

    readonly arrow = TUI_ARROW;

    readonly loading$ = this.request$.pipe(map(value => !value));

    readonly total$ = this.request$.pipe(
        filter(isPresent),
        map(({length}) => length),
        startWith(1),
    );

    readonly data$ = this.request$.pipe(
        filter(isPresent),
        map(users => users.filter(isPresent)),
        startWith([]),
    );

    onEnabled(enabled: string[]) {
        this.enabled = enabled;
        this.columns = enabled.map(column => KEYS[column]);
    }

    onDirection(direction: -1 | 1) {
        this.direction$.next(direction);
    }

    onSize(size: number) {
        this.size$.next(size);
    }

    onPage(page: number) {
        this.page$.next(page);
    }

    isMatch(value: unknown): boolean {
        return !!this.search && TUI_DEFAULT_MATCHER(value, this.search);
    }

    getAge(user: User): number {
        return getAge(user);
    }

    private getData(
        key: 'name' | 'dob' | 'age',
        direction: -1 | 1,
        page: number,
        size: number,
        minAge: number,
    ): Observable<ReadonlyArray<User | null>> {
        console.log('Making a request');

        const start = page * size;
        const end = start + size;
        const result = [...DATA]
            .sort(sortBy(key, direction))
            .filter(user => getAge(user) >= minAge)
            .map((user, index) => (index >= start && index < end ? user : null));

        // Imitating server response
        return timer(3000).pipe(mapTo(result));
    }
}

function getKey(
    sorter: TuiComparator<User>,
    dictionary: Record<Key, TuiComparator<User>>,
): Key {
    const pair = Object.entries(dictionary).find<[Key, TuiComparator<User>]>(
        (item): item is [Key, TuiComparator<User>] => item[1] === sorter,
    );

    return pair ? pair[0] : 'name';
}

function sortBy(key: 'name' | 'dob' | 'age', direction: -1 | 1): TuiComparator<User> {
    return (a, b) =>
        key === 'age'
            ? direction * defaultSort(getAge(a), getAge(b))
            : direction * defaultSort(a[key], b[key]);
}

function getAge({dob}: User): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = months > 0 || (!months && days > 9) ? 1 : 0;

    return years + offset;
}
