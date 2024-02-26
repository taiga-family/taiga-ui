import {ChangeDetectorRef, Component, inject} from '@angular/core';
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
    protected open = false;

    protected value = 'some data';

    protected showBigText = false;

    constructor() {
        interval(3000)
            .pipe(
                tuiWatch(inject(ChangeDetectorRef)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(() => {
                this.showBigText = !this.showBigText;
            });
    }
}
