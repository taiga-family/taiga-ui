import {Component, inject, DestroyRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetService} from '@taiga-ui/addon-mobile';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Subject, switchMap, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-sheet-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: []
})
export class TuiSheetExample1 {
    protected readonly stream$ = new Subject<void>();

    constructor() {
        this.stream$
            .pipe(
                switchMap(() =>
                    inject(TuiSheetService).open('Simple sheet', {overlay: true}),
                ),
                takeUntilDestroyed(inject(DestroyRef)),
            )
            .subscribe();
    }
}
