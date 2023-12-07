import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-labeled-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiRadioLabeledExample3 {
    items = [{name: 'ownership'}, {name: 'lease'}, {name: 'sublease'}];

    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(this.items[0]),
    });
}
