import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });

    protected items1 = tuiCreateTimePeriods();
    protected items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);
}
