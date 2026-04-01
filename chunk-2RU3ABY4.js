import"./chunk-HU6DUUP4.js";var o=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime, tuiInputDateTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateTimeOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date | null): [TuiDay, TuiTime | null] | null =>
                    value && [
                        TuiDay.fromUtcNativeDate(value),
                        new TuiTime(value.getUTCHours(), value.getUTCMinutes()),
                    ],
                toControlValue: (value: [TuiDay, TuiTime | null] | null): Date | null => {
                    const {hours = 0, minutes = 0} = value?.[1] ?? {};

                    return (
                        value &&
                        new Date(value[0].toUtcNativeDate().setUTCHours(hours, minutes))
                    );
                },
            },
        }),
    ],
})
export default class Example {
    protected value: Date | null = new Date(Date.UTC(2024, 7, 9, 12, 17));
}
`;export{o as default};
