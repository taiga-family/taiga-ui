import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    tuiDialog,
    TuiHint,
    TuiIcon,
    TuiIconPipe,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

import {PayModal} from './pay-modal/pay-modal.component';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiHint,
        TuiIcon,
        TuiIconPipe,
        TuiInputNumber,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly destroyRef = inject(DestroyRef);
    private readonly payModal = tuiDialog(PayModal, {
        size: 'auto',
        closeable: true,
    });

    protected readonly amountControl = new FormControl(100, {
        nonNullable: true,
    });

    protected payByCard(): void {
        this.payModal({
            amount: this.amountControl.value,
        })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
