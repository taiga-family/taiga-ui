import"./chunk-B4AJQJMI.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputMonth, tuiInputMonthOptionsProvider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputMonth, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputMonthOptionsProvider({
            // Callback has the first argument \u2013 size of the textfield box ('s' | 'm' | 'l')
            icon: () => '',
        }),
    ],
})
export default class Example {
    protected value: TuiMonth | null = null;
}
`;export{e as default};
