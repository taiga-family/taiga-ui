import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

@Component({
    selector: `tui-input-time-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputTimeExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });

    items1 = tuiCreateTimePeriods();
    items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);
}
