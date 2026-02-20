import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiPager} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiPager],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected count = 10;
    protected index = 0;

    protected prev(): void {
        this.index = Math.max(this.index - 1, 0);
    }

    protected next(): void {
        this.index = Math.min(this.index + 1, this.count - 1);
    }
}
`;export{o as default};
