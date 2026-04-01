import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiRange],
    templateUrl: './index.html',
    styles: ':host {display: flex; flex-direction: column;}',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [40, 60];
}
`;export{t as default};
