import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-password-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputPasswordExample1 {
    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('password', Validators.required),
    });
}
