import"./chunk-42JZD6NG.js";var t=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputTime, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            valueTransformer: {
                fromControlValue(controlValue: string): TuiTime | null {
                    return controlValue ? TuiTime.fromString(controlValue) : null;
                },
                toControlValue(time: TuiTime | null): string {
                    return time ? time.toString() : '';
                },
            },
        }),
    ],
})
export default class Example {
    protected value = '';
}
`;export{t as default};
