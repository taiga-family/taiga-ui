import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'input-month-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class InputMonthExample2 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(null),
    });
}
