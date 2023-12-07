import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-toggle-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiToggleExample1 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(true),
        testValue2: new UntypedFormControl(false),
        testValue3: new UntypedFormControl(true),
        testValue4: new UntypedFormControl(false),
        testValue5: new UntypedFormControl(true),
        testValue6: new UntypedFormControl(false),
        testValue7: new UntypedFormControl(true),
        testValue8: new UntypedFormControl(false),
    });
}
