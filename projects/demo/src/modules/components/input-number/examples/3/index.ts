import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-number-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputNumberExample3 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(Math.PI),
    });
}
