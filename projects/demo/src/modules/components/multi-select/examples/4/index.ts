import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiContext, TuiHandler} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, tuiIsNumber, TuiLet} from '@taiga-ui/cdk';
import {TuiDataListDirective} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {map, shareReplay, startWith, Subject, switchMap, timer} from 'rxjs';

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
        TuiMultiSelectModule,
        TuiLet,
        AsyncPipe,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperComponent,
        TuiDataListDirective,
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
    protected readonly stringify$: Observable<
        TuiHandler<TuiContext<number> | number, string>
    > = this.server$.pipe(
        map(items => new Map(items.map<[number, string]>(({id, name}) => [id, name]))),
        startWith(new Map()),
        map(
            map => (id: TuiContext<number> | number) =>
                (tuiIsNumber(id) ? map.get(id) : map.get(id.$implicit)) || 'Loading...',
        ),
    );

    protected readonly control = new FormControl([2, 3]);

    protected onSearch(search: string | null): void {
        this.search$.next(search || '');
    }
}
