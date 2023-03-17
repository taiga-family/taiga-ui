import {Component, Inject, Self} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs/operators';

import {PayModalComponent} from './pay-modal/pay-modal.component';

@Component({
    selector: 'tui-dialog-example-9',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent9 {
    readonly amountControl = new FormControl(100);

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    ) {}

    payByCard(): void {
        this.dialogService
            .open(new PolymorpheusComponent(PayModalComponent), {
                size: 'auto',
                closeable: true,
                data: {
                    amount: this.amountControl.value,
                },
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}
