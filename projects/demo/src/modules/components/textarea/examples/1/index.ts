import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textarea-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTextareaExample1 {
    protected testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
        testValue2: new FormControl('This one can be expanded', Validators.required),
    });
}
