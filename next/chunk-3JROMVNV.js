import"./chunk-LQ6M4NCU.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiFormatNumberPipe, TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 123456.789;
}
`;export{t as default};
