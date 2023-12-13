import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-group-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.style.less'],
    encapsulation,
    changeDetection,
})
export class TuiGroupExample1 {
    readonly items = ['Option 1', 'Option 2', 'Option 3'];

    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('', Validators.required),
        multiSelectControl: new UntypedFormControl([], Validators.required),
        testValue3: new UntypedFormControl('', Validators.required),
    });
}
