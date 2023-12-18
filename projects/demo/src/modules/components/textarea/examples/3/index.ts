import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textarea-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTextareaExample3 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl('A field', Validators.required),
    });
}
