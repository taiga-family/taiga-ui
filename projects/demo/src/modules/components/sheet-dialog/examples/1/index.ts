import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {Subject, switchMap, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-sheet-dialog-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiSheetDialogExample1 {
    protected readonly stream$ = new Subject<void>();

    constructor() {
        this.stream$
            .pipe(
                switchMap(() =>
                    inject(TuiSheetDialogService).open('', {label: 'Simple sheet'}),
                ),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe();
    }
}
