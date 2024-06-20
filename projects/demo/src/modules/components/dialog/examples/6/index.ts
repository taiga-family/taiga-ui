import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiHint} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiHint,
        TuiDialog,
        ReactiveFormsModule,
        TuiInputModule,
        TuiAutoFocus,
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
