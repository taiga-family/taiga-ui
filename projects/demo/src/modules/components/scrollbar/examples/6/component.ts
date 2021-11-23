import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-scrollbar-example-6',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiScrollbarExample6Component {
    items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

    add() {
        this.items = [...this.items, `Item #${this.items.length}`];
    }
}
