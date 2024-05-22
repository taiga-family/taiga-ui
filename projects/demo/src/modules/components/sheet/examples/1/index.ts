import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiSheetService} from '@taiga-ui/legacy';
import {Subject, switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly stream$ = new Subject<void>();

    constructor() {
        const service = inject(TuiSheetService);

        this.stream$
            .pipe(
                switchMap(() => service.open('Simple sheet', {overlay: true})),
                takeUntilDestroyed(),
            )
            .subscribe();
    }
}
