import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

import {PayModalComponent} from './pay-modal/pay-modal.component';

@Component({
    selector: 'tui-dialog-example-9',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiDialogExampleComponent9 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    protected readonly amountControl = new FormControl(100);

    protected payByCard(): void {
        this.dialogs
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
