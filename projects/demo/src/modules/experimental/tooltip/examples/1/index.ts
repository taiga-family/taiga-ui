import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {interval, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-tooltip-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiTooltipExample1 {
    loader = true;

    text = '';

    constructor() {
        interval(2000)
            .pipe(
                tuiWatch(inject(ChangeDetectorRef)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(() => {
                this.loader = !this.loader;
                this.text = this.text ? '' : 'Error 502: Bad Gateway';
            });
    }
}
