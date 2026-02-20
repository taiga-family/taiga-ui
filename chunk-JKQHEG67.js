import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPager} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiIcon, TuiPager],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected count = 8;
    protected activeIndex = 0;

    protected prev(): void {
        this.activeIndex = Math.max(this.activeIndex - 1, 0);
    }

    protected next(): void {
        this.activeIndex = Math.min(this.activeIndex + 1, this.count - 1);
    }
}
`;export{o as default};
