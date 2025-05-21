import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputTime, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            icon: () => '@tui.timer',
            mode: 'HH:MM:SS.MSS',
            timeSegmentMaxValues: {
                hours: 47,
                minutes: 59,
                seconds: 59,
                milliseconds: 999,
            },
        }),
    ],
})
export default class Example {
    protected value: TuiTime | null = null;
}
