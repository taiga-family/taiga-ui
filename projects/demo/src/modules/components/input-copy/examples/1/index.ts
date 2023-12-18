import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-copy-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputCopyExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('', Validators.required),
    });
}
