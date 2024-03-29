import {Component, inject, DestroyRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

import {PayModalComponent} from './pay-modal/pay-modal.component';

@Component({
    selector: 'tui-dialog-example-9',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,

})
export class TuiDialogExampleComponent9 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly destroyRef = inject(DestroyRef);

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
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
