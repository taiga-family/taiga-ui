import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-scrollbar-example-6',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    encapsulation,
    changeDetection,
})
export class TuiScrollbarExample6Component {
    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

    protected add(): void {
        this.items = [...this.items, `Item #${this.items.length}`];
    }
}
