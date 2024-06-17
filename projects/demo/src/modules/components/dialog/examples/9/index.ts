import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiDialogService,
    TuiHintOptionsDirective,
    TuiIconPipe,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {PayModalComponent} from './pay-modal/pay-modal.component';

@Component({
    standalone: true,
    imports: [
        TuiInputNumberModule,
        ReactiveFormsModule,
        TuiTextfieldOptionsDirective,
        TuiTextfieldControllerModule,
        TuiHintOptionsDirective,
        TuiButton,
        TuiIconPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
