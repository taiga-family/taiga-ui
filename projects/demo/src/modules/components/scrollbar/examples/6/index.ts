import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollableDirective, TuiScrollbarComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiScrollbarComponent,
        TuiScrollableDirective,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

    protected add(): void {
        this.items = [...this.items, `Item #${this.items.length}`];
    }
}
