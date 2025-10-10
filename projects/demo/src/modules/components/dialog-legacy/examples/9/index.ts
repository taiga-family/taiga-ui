import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint, TuiIcon, TuiIconPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';
import {tuiDialog} from '@taiga-ui/legacy';

import {PayModal} from './pay-modal/pay-modal.component';

@Component({
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
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly destroyRef = inject(DestroyRef);
    private readonly payModal = tuiDialog(PayModal, {
        size: 'auto',
        closable: true,
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
