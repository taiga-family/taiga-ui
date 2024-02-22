import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-labeled-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiRadioLabeledExample3 {
    protected items = [{name: 'ownership'}, {name: 'lease'}, {name: 'sublease'}];

    protected testForm = new FormGroup({
        testValue1: new FormControl(this.items[0]),
    });
}
