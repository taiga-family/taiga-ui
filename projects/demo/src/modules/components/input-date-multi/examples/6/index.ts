import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti, tuiInputDateMultiOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateMultiOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date[] | null): TuiDay[] =>
                    value?.map((date) => TuiDay.fromUtcNativeDate(date)) ?? [],
                toControlValue: (value: TuiDay[]): Date[] =>
                    value?.map((day) => day.toUtcNativeDate()),
            },
        }),
    ],
})
export default class Example {
    protected value: Date[] | null = null;
}
