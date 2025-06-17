import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
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
                hours: 24 * 7,
            },
        }),
    ],
})
export default class Example {
    protected value: TuiTime | null = new TuiTime(99, 59, 59, 999);
}
