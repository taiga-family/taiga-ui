import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTabs, NgForOf, TuiIcon, TuiButton, TuiInputNumberModule, FormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected activeItemIndex = 0;

    protected items = Array.from({length: 5}, (_, i) => `Item #${i}`);

    protected add(): void {
        this.items = this.items.concat(`Item #${Date.now()}`);
    }

    protected remove(removed: string): void {
        const index = this.items.indexOf(removed);

        this.items = this.items.filter((item) => item !== removed);

        if (index <= this.activeItemIndex) {
            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
        }
    }
}
