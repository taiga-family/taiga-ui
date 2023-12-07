import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textarea-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTextareaExample1 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl('A field', Validators.required),
        testValue2: new UntypedFormControl(
            'This one can be expanded',
            Validators.required,
        ),
    });
}
