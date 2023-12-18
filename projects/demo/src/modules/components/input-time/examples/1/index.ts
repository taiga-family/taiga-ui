import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-time-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTimeExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(new TuiTime(12, 30)),
    });
}
