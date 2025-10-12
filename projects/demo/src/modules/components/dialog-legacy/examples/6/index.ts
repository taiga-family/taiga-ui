import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiDialog, TuiInputModule} from '@taiga-ui/legacy';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiHint,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected exampleForm = new FormGroup({
        exampleControl: new FormControl(''),
    });

    protected open = false;

    protected showDialog(): void {
        this.open = true;
    }
}
