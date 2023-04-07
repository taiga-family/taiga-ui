import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {TuiDialogFormService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-dialog-example-8',
    templateUrl: './index.html',
    providers: [TuiDialogFormService],
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent8 {
    value = '';

    constructor(
        @Inject(TuiDialogFormService) private readonly dialogForm: TuiDialogFormService,
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    ) {}

    onModelChange(value: string): void {
        this.value = value;
        this.dialogForm.markAsDirty();
    }

    onClick(content: PolymorpheusContent): void {
        const closeable = this.dialogForm.withPrompt({
            label: 'Are you sure?',
            data: {
                content: 'Your data will be lost',
            },
        });

        this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({
            complete: () => {
                this.value = '';
                this.dialogForm.markAsPristine();
            },
        });
    }
}
