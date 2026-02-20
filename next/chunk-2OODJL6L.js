import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputSlider, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 9_999.9;
}
`;export{t as default};
