import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {Subject, switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly stream$ = new Subject<void>();

    constructor() {
        const service = inject(TuiSheetDialogService);

        this.stream$
            .pipe(
                switchMap(() => service.open('', {label: 'Simple sheet'})),
                takeUntilDestroyed(),
            )
            .subscribe();
    }
}
