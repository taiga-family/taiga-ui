import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {mergeAll, Subject} from 'rxjs';

const MAX_CONCURRENT = 3;

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly queue$ = new Subject<Observable<unknown>>();
    private i = 0;

    constructor() {
        this.queue$.pipe(mergeAll(MAX_CONCURRENT), takeUntilDestroyed()).subscribe();
    }

    protected showNotification(): void {
        this.queue$.next(
            this.alerts.open(
                `It is impossible to show more than ${MAX_CONCURRENT} alerts concurrently!<br/>` +
                    `<strong>Index: ${this.i++}</strong>`,
                {label: 'Use power of RxJS!'},
            ),
        );
    }
}
