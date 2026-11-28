import"./chunk-LQ6M4NCU.js";var o=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiHint],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly favorite = signal(false);
}
`;export{o as default};
