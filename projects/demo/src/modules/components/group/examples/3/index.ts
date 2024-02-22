import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-group-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiGroupExample3 {
    protected testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });
}
