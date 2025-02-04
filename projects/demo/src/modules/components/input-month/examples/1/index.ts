import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth, tuiInputMonthOptionsProvider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiInputMonth, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputMonthOptionsProvider({
            // Callback has the first argument – size of the textfield box ('s' | 'm' | 'l')
            icon: () => '',
        }),
    ],
})
export default class Example {
    protected value: number | null = null;
}
