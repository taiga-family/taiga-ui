import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textarea-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTextareaExample3 {
    protected testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
    });
}
