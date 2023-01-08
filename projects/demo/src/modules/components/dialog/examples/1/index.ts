import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
    selector: 'tui-dialog-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent1 {
    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    showDialog(): void {
        this.dialogService
            .open('This is a plain string dialog', {label: 'Heading', size: 's'})
            .subscribe();
    }

    showDialogWithCustomButton(): void {
        this.dialogService
            .open('Good, Anakin, Good!', {
                label: 'Star wars. Episode III',
                size: 's',
                data: {button: 'Do it!'},
            })
            .subscribe();
    }
}
