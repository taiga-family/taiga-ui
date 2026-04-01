import"./chunk-HU6DUUP4.js";var e=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiNotification} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly show = signal(false);
}
`;export{e as default};
