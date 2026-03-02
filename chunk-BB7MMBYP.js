import"./chunk-HU6DUUP4.js";var o=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiPopup} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    imports: [TuiActionBar, TuiButton, TuiPopup],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);
}
`;export{o as default};
