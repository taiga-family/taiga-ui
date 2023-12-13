import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-checkbox-block-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCheckboxBlockExample3 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(false),
        testValue2: new UntypedFormControl(false),
        testValue3: new UntypedFormControl(false),
        testValue4: new UntypedFormControl(false),
    });
}
