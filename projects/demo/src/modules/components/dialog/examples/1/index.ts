import {Component, Inject} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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

    showDialog() {
        this.dialogService
            .open('This is a plain string dialog', {label: 'Heading', size: 's'})
            .subscribe();
    }
}
