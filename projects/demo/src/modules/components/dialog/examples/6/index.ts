import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dialog-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent6 {
    exampleForm = new UntypedFormGroup({
        exampleControl: new UntypedFormControl(''),
    });

    open = false;

    showDialog(): void {
        this.open = true;
    }
}
