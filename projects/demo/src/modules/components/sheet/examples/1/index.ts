import {Component, Inject, Self} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetService} from '@taiga-ui/addon-mobile';
import {TuiDestroyService} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-sheet-example-1',
    templateUrl: './index.html',
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample1 {
    readonly stream$ = new Subject<void>();

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiSheetService) service: TuiSheetService,
    ) {
        this.stream$
            .pipe(
                switchMap(() => service.open('Simple sheet', {overlay: true})),
                takeUntil(destroy$),
            )
            .subscribe();
    }
}
