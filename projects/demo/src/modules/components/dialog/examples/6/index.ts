import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dialog-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent6 {
    protected exampleForm = new FormGroup({
        exampleControl: new FormControl(''),
    });

    protected open = false;

    protected showDialog(): void {
        this.open = true;
    }
}
