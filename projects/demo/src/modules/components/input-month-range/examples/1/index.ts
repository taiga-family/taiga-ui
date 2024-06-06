import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMonthRange} from '@taiga-ui/cdk';
import {TuiInputMonthRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputMonthRangeModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl<TuiMonthRange | null>(null);
}
