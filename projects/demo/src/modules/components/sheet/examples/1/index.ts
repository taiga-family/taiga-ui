import {Component, Inject} from '@angular/core';
import {TuiSheetService} from '@taiga-ui/addon-mobile';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {EMPTY, Observable, Subject} from 'rxjs';
import {first, retry, switchMap, takeUntil} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-sheet-example-1',
    templateUrl: './index.html',
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
                        : service.open('Simple sheet', {overlay: true}).pipe(first()),
                ),
                retry(),
                takeUntil(destroy$),
            )
            .subscribe();
    }
}
