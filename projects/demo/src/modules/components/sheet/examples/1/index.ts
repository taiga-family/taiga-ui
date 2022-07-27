import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetService} from '@taiga-ui/addon-mobile';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {EMPTY, Observable, Subject} from 'rxjs';
import {first, retry, switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-sheet-example-1`,
    templateUrl: `./index.html`,
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample1 {
    readonly stream$ = new Subject();

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiSheetService) service: TuiSheetService,
    ) {
        this.stream$
            .pipe(
                switchMap((_, i) =>
                    i % 2
                        ? EMPTY
                        : service.open(`Simple sheet`, {overlay: true}).pipe(first()),
                ),
                retry(),
                takeUntil(destroy$),
            )
            .subscribe();
    }
}
