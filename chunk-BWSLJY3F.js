import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiCopy, TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCopy, TuiIcon, TuiInput, TuiInputChip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';

    protected multiValue = ['I', 'love', 'Taiga UI'];
}
`;export{t as default};
