import"./chunk-HU6DUUP4.js";var i=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiPulse} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiButton, TuiHint, TuiPulse, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = signal(0);
}
`;export{i as default};
