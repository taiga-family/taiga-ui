import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-open-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownOpenExample3 {
    protected open = false;

    protected readonly items = [
        ['By interest', 'By genre', 'By release year', 'By subject'],
        ['Ascending', 'Descending'],
    ];

    protected primary = 'By genre';

    protected ascending = false;

    protected onClick(item: string): void {
        if (this.items[0].includes(item)) {
            this.primary = item;

            return;
        }

        this.ascending = item === this.items[1][0];
    }

    protected itemIsActive(item: string): boolean {
        return (
            item === this.primary ||
            (this.ascending && item === this.items[1][0]) ||
            (!this.ascending && item === this.items[1][1])
        );
    }
}
