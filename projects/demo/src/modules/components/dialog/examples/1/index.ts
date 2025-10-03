import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected showDialog(): void {
        this.dialogs
            .open(
                '<div>This is a plain string dialog.</div>It supports basic <strong>HTML</strong>',
                {label: 'Heading', size: 's'},
            )
            .subscribe();
    }

    protected showDialogWithCustomButton(): void {
        this.dialogs
            .open('Good, Anakin, Good!', {
                label: 'Star wars. Episode III',
                size: 's',
                data: {button: 'Do it!'},
            })
            .subscribe();
    }
}
