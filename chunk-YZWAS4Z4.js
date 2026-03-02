import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiIcon, TuiLink, TuiPush],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
`;export{t as default};
