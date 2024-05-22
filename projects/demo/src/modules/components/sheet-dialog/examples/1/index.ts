import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective} from '@taiga-ui/core';
import {Subject, switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
