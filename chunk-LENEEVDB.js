import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, TuiInput, TuiLabel} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    selector: 'tui-variables-example-1',
    imports: [FormsModule, TuiCardLarge, TuiCheckbox, TuiInput, TuiLabel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export class TuiVariablesExample1 {
    protected value = '';
    protected checkbox = true;
}
`;export{t as default};
