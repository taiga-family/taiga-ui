import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-tabs-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTabsExample5 {
    protected open = false;
    protected activeItemIndex = 0;

    protected items = Array.from({length: 5}, (_, i) => `Item #${i}`);

    protected add(): void {
        this.items = this.items.concat(`Item #${Date.now()}`);
    }

    protected remove(removed: string): void {
        const index = this.items.indexOf(removed);

        this.items = this.items.filter(item => item !== removed);

        if (index <= this.activeItemIndex) {
            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
        }
    }
}
