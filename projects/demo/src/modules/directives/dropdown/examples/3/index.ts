import {ChangeDetectorRef, Component, Inject, Self} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {interval, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-dropdown-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiDropdownExample3 {
    open = false;

    value = 'some data';

    showBigText = false;

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) {
        interval(3000)
            .pipe(tuiWatch(cdr), takeUntil(destroy$))
            .subscribe(() => {
                this.showBigText = !this.showBigText;
            });
    }
}
