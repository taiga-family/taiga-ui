import"./chunk-HU6DUUP4.js";var o=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDate, tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputDateOptionsProvider({
            valueTransformer: {
                fromControlValue: (value: Date | null): TuiDay | null =>
                    value && TuiDay.fromUtcNativeDate(value),
                toControlValue: (value: TuiDay | null): Date | null =>
                    value?.toUtcNativeDate() || null,
            },
        }),
    ],
})
export default class Example {
    protected value: Date | null = null;
}
`;export{o as default};
