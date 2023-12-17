import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-labeled-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRadioLabeledExample2 {
    items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];

    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(this.items[0]),
    });
}
