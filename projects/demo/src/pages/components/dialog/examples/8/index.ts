import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected show(): void {
        this.dialogs
            .open('The width of this dialog is defined by its content.', {
                label: 'Content-sized dialog',
                size: null,
            })
            .subscribe();
    }
}
