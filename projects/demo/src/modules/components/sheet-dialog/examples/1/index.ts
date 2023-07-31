import {Component, Inject, Self} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {Observable, Subject} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-sheet-dialog-example-1',
    templateUrl: './index.html',
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiSheetDialogExample1 {
    readonly stream$ = new Subject<void>();

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiSheetDialogService) service: TuiSheetDialogService,
    ) {
        this.stream$
            .pipe(
                switchMap(() => service.open('', {label: 'Simple sheet'})),
                takeUntil(destroy$),
            )
            .subscribe();
    }
}
