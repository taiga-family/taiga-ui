import"./chunk-42JZD6NG.js";var o=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlert, TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiAlert, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly show = signal(false);
}
`;export{o as default};
