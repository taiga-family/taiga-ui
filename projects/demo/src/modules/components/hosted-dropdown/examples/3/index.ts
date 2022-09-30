import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-hosted-dropdown-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample3 {
    open = false;

    readonly items = [
        [`By interest`, `By genre`, `By release year`, `By subject`],
        [`Ascending`, `Descending`],
    ];

    primary = `By genre`;

    ascending = false;

    onClick(item: string): void {
        if (this.items[0].includes(item)) {
            this.primary = item;

            return;
        }

        this.ascending = item === this.items[1][0];
    }

    itemIsActive(item: string): boolean {
        return (
            item === this.primary ||
            (this.ascending && item === this.items[1][0]) ||
            (!this.ascending && item === this.items[1][1])
        );
    }
}
