import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputColor, tuiInputColorOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputColor],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'end'})],
})
export default class Example {
    protected value = '#ff7f50cc';
}
`;export{t as default};
