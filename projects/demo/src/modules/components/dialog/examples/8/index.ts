import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {TuiConfirmService} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiInputModule, FormsModule, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [TuiConfirmService],
})
export default class Example {
    private readonly confirm = inject(TuiConfirmService);
    private readonly dialogs = inject(TuiDialogService);

    protected value = '';

    protected onModelChange(value: string): void {
        this.value = value;
        this.confirm.markAsDirty();
    }

    protected onClick(content: PolymorpheusContent): void {
        const closeable = this.confirm.withConfirm({
            label: 'Are you sure?',
            closeable: false,
            dismissible: false,
            data: {
                content: 'Your data will be <strong>lost</strong>',
            },
        });

        this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({
            complete: () => {
                this.value = '';
                this.confirm.markAsPristine();
            },
        });
    }
}
