import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiMonth} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'input-month-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class InputMonthExample1 {
    protected readonly control = new FormControl<TuiMonth | null>(null);
}
