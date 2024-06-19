import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {delay, of, startWith, Subject, switchMap} from 'rxjs';

const databaseMockData: readonly string[] = [
    'John Cleese',
    'Eric Idle',
    'Michael Palin',
    'Terry Gilliam',
    'Terry Jones',
    'Graham Chapman',
];

@Component({
    standalone: true,
    imports: [
        TuiInputTagModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiDataListWrapper,
        TuiDataList,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly search$ = new Subject<string>();

    protected value = [];

    protected readonly items$ = this.search$.pipe(
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),
        ),
        startWith(databaseMockData),
    );

    protected onSearchChange(search: string): void {
        this.search$.next(search);
    }

    /**
     * Server request emulation
     */
    private serverRequest(search: string): Observable<readonly string[]> {
        const result = databaseMockData.filter(item =>
            item.toLowerCase().includes(search.toLowerCase()),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
