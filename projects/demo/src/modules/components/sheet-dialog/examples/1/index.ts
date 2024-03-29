import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Subject, switchMap} from 'rxjs';

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
                // Replacement needed for takeUntilDestroyed(inject(DestroyRef))
            )
            .subscribe();
    }
}
