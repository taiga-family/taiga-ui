import"./chunk-42JZD6NG.js";var t=`import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, tuiSum, TuiTime} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

type ControlValue = [TuiDay, TuiTime | null] | null;

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiInputDateTime, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
    protected readonly control = new FormControl<ControlValue>(null);
    protected readonly tomorrow: ControlValue = [
        TuiDay.currentLocal().append({day: 1}),
        new TuiTime(9, 0),
    ];

    protected isSame(a: ControlValue, b: ControlValue): boolean {
        return Boolean(a && b && tuiSum(...a.map(Number)) === tuiSum(...b.map(Number)));
    }
}
`;export{t as default};
