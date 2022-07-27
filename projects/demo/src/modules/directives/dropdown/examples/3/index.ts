import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, watch} from '@taiga-ui/cdk';
import {interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-dropdown-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiDropdownExample3 {
    open = false;

    value = `some data`;

    showBigText = false;

    constructor(
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        interval(3000)
            .pipe(watch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(() => {
                this.showBigText = !this.showBigText;
            });
    }
}
