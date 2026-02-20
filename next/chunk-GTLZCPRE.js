import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = ['I', 'love', 'Angular'];
}
`;export{t as default};
