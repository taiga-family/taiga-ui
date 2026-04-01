import"./chunk-HU6DUUP4.js";var l=`import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiScrollable,
        TuiScrollbar,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = Array.from({length: 10000}).map((_, i) => \`Item #\${i}\`);

    protected add(): void {
        this.items = [...this.items, \`Item #\${this.items.length}\`];
    }
}
`;export{l as default};
