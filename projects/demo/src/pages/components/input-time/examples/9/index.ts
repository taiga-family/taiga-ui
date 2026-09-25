import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {maskitoParseTime} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            valueTransformer: {
                fromControlValue(controlValue: string): TuiTime | null {
                    return controlValue
                        ? TuiTime.fromAbsoluteMilliseconds(
                              maskitoParseTime(controlValue, {mode: 'HH:MM'}),
                          )
                        : null;
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
