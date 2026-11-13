import"./chunk-LQ6M4NCU.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiSwitchOptionsProvider({
            appearance: (el) => (el.checked ? 'accent' : 'secondary'),
        }),
    ],
})
export default class Example {
    protected value = true;
}
`;export{o as default};
