import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import type {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-time-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTimeExample2 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });

    protected items1 = tuiCreateTimePeriods();
    protected items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);
}
