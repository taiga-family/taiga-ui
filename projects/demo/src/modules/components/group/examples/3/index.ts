import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-group-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiGroupExample3 {
    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('orange'),
    });
}
