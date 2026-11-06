import"./chunk-LQ6M4NCU.js";var o=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiMeter} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiMeter],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly min = signal('0');
    protected readonly max = signal('1');
    protected readonly low = signal('0');
    protected readonly high = signal('1');
    protected readonly optimum = signal('0.5');
    protected readonly value = signal('0');
}
`;export{o as default};
