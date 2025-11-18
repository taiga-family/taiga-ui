import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiConfirmService} from '@taiga-ui/kit';
import {TuiDialogService} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [FormsModule, TuiButton, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        // Provide TUI_CONFIRM_DIALOG if you want to override default Confirm dialog
        TuiConfirmService,
        {
            provide: TuiDialogService,
            useExisting: TuiResponsiveDialogService,
        },
    ],
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
        const closable = this.confirm.withConfirm({
            label: 'Are you sure?',
            data: {
                content: 'Your data will be <strong>lost</strong>',
            },
        });

        this.dialogs
            .open(content, {label: 'Form', closable, dismissible: closable})
            .subscribe({
                complete: () => {
                    this.value = '';
                    this.confirm.markAsPristine();
                },
            });
    }
}
