import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {Subject, switchMap} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-sheet-dialog-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSheetDialogExample1 {
    protected readonly stream$ = new Subject<void>();

    constructor() {
        this.stream$
            .pipe(
                switchMap(() =>
                    inject(TuiSheetDialogService).open('', {label: 'Simple sheet'}),
                ),
                takeUntilDestroyed(),
            )
            .subscribe();
    }
}
