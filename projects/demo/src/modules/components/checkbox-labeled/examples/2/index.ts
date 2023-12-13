import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-checkbox-labeled-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCheckboxLabeledExample2 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(true),
        testValue2: new UntypedFormControl(false),
        testValue3: new UntypedFormControl(false),
    });
}
