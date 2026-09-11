import"./chunk-LQ6M4NCU.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel, TuiRadio, tuiRadioOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiLabel, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiRadioOptionsProvider({
            appearance: (el) => (el.checked ? 'primary-grayscale' : 'outline-grayscale'),
        }),
    ],
})
export default class Example {
    protected value = '1';
}
`;export{a as default};
