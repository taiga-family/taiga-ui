import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';
import {TuiInputNumber, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInput, TuiInputNumber, TuiSwitch],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected toggle = false;
    protected text = '';
    protected money = 237;
}
`;export{o as default};
