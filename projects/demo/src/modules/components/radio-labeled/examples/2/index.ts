import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-radio-labeled-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiRadioLabeledExample2 {
    items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];

    testForm = new FormGroup({
        testValue1: new FormControl(this.items[0]),
    });
}
