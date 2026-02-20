import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputTime, tuiInputTimeOptionsProvider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputTime, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputTimeOptionsProvider({icon: ''})],
})
export default class Example {
    protected value: TuiTime | null = new TuiTime(9, 0);
}
`;export{e as default};
