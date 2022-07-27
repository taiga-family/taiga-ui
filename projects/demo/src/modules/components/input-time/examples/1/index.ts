import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';

@Component({
    selector: `tui-input-time-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputTimeExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(12, 30)),
    });
}
