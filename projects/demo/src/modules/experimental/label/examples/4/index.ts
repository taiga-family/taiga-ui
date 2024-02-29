import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-label-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiLabelExample4 {
    protected testForm = new FormGroup({
        testValue: new FormControl('Input value'),
    });
}
