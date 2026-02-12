import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            icon: '@tui.timer',
            mode: 'HH:MM:SS.MSS',
            timeSegmentMaxValues: {hours: 99},
        }),
    ],
})
export default class Example {
    protected value: TuiTime | null = new TuiTime(99, 59, 59, 999);
}
