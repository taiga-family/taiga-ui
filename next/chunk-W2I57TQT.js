import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
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
    providers: [tuiInputMonthOptionsProvider({icon: ''})],
})
export default class Example {
    protected value: TuiMonth | null = null;
}
`;export{i as default};
