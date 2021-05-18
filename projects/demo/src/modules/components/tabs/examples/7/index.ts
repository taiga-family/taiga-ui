import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-7',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTabsExample7 {
    activeItemIndex = 0;

    items = Array.from({length: 5}, (_, i) => `Item #${i}`);

    add() {
        this.items = this.items.concat(`Item #${Date.now()}`);
    }

    remove(removed: string) {
        const index = this.items.indexOf(removed);

        this.items = this.items.filter(item => item !== removed);

        if (index <= this.activeItemIndex) {
            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
        }
    }
}
