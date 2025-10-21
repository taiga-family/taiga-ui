import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti, tuiInputDateMultiOptionsProvider} from '@taiga-ui/kit';
import {JsonPipe} from '@angular/common';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateMultiOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date[] | null): TuiDay[] | null => {
                    return value?.map((d) => TuiDay.fromUtcNativeDate(d)) ?? null;
                },
                toControlValue: (value: TuiDay[] | null): Date[] | null => {
                    return value?.map((day) => day.toUtcNativeDate()) ?? null;
                },
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
