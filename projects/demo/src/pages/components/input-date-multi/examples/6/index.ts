import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti, tuiInputDateMultiOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateMultiOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date[]): TuiDay[] =>
                    value.map((d) => TuiDay.fromUtcNativeDate(d)),
                toControlValue: (value: TuiDay[]): Date[] =>
                    value.map((day) => day.toUtcNativeDate()),
            },
        }),
    ],
})
export default class Example {
    protected value: Date[] | null = [
        TuiDay.currentLocal().append({day: -1}).toLocalNativeDate(),
        TuiDay.currentLocal().toLocalNativeDate(),
        TuiDay.currentLocal().append({day: 1}).toLocalNativeDate(),
    ];
}
