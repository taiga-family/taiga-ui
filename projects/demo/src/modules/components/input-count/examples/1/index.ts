import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-count-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputCountExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(10, Validators.required),
        testValue2: new UntypedFormControl(10, Validators.required),
        testValue3: new UntypedFormControl(-10, Validators.required),
    });
}
