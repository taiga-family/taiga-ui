import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'input-year-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class InputYearExample2 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(null),
    });
}
