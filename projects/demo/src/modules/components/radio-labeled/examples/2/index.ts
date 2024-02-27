import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    protected items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];

    protected testForm = new FormGroup({
        testValue1: new FormControl(this.items[0]),
    });
}
