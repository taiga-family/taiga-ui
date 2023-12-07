import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('mail@mail.ru'),
    });
}
