import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {delay, Observable, of, startWith, Subject, switchMap} from 'rxjs';

const databaseMockData: readonly string[] = [
    'John Cleese',
    'Eric Idle',
    'Michael Palin',
    'Terry Gilliam',
    'Terry Jones',
    'Graham Chapman',
];

@Component({
    selector: 'tui-input-tag-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTagExample2 {
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
