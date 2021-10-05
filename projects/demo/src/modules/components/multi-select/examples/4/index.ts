import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {isNumber, TUI_DEFAULT_MATCHER, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {Subject, timer} from 'rxjs';
import {map, mapTo, shareReplay, startWith, switchMap} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';

const DICTIONARY = [
    {id: 1, name: 'Luke Skywalker'},
    {id: 2, name: 'Princess Leia'},
    {id: 3, name: 'Darth Vader'},
    {id: 4, name: 'Han Solo'},
    {id: 5, name: 'Obi-Wan Kenobi'},
    {id: 6, name: 'Yoda'},
];

@Component({
    selector: 'tui-multi-select-example-4',
    templateUrl: './index.html',
    changeDetection,
})
export class TuiMultiSelectExample4 {
    // Server request emulation
    private server$ = timer(5000).pipe(
        mapTo(DICTIONARY),
        shareReplay({refCount: true, bufferSize: 1}),
    );

    private search$ = new Subject<string>();

    // Items only hold IDs
    readonly items$ = this.search$.pipe(
        startWith(''),
        switchMap(search =>
            this.server$.pipe(
                map(items =>
                    items
                        .filter(({name}) => TUI_DEFAULT_MATCHER(name, search))
                        .map(({id}) => id),
                ),
            ),
        ),
        startWith(null), // <-- loading
    );

    // Stringify mapper that turns IDs to names
    readonly stringify$ = this.server$.pipe(
        map(
            items =>
                new Map(
                    items.map<[number, string]>(({id, name}) => [id, name]),
                ),
        ),
        startWith(new Map()),
        map(map => (id: number | TuiContextWithImplicit<number>) =>
            (isNumber(id) ? map.get(id) : map.get(id.$implicit)) || '',
        ),
    );

    readonly control = new FormControl([2, 3]);

    onSearch(search: string | null) {
        this.search$.next(search || '');
    }
}
