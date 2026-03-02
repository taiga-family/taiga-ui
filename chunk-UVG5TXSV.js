import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly keyboard = inject(TuiKeyboardService);
    protected value = '';
}
`;export{t as default};
