import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-tooltip-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiTooltipExample1 {
    loader = true;

    text = ``;

    constructor(
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        interval(2000)
            .pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(() => {
                this.loader = !this.loader;
                this.text = this.text ? `` : `Error 502: Bad Gateway`;
            });
    }
}
