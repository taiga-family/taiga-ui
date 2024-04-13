import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTime} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-time-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTimeExample1 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(12, 30)),
    });
}
