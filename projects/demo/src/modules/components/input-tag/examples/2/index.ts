import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {delay, type Observable, of, startWith, Subject, switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    // Database mock data
    private readonly items = inject<readonly string[]>('Pythons' as any);
    private readonly search$ = new Subject<string>();

    protected value = [];

    protected readonly items$ = this.search$.pipe(
        switchMap((search) =>
            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),
        ),
        startWith(this.items),
    );

    protected onSearchChange(search: string): void {
        this.search$.next(search);
    }

    /**
     * Server request emulation
     */
    private serverRequest(search: string): Observable<readonly string[]> {
        const result = this.items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase()),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
