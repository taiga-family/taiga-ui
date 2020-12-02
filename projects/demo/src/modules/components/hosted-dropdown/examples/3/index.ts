import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-hosted-dropdown-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample3 {
    open = false;

    readonly items = [
        ['По интересу', 'По жанру', 'По году выпуска', 'По тематике'],
        ['По возрастанию', 'По убыванию'],
    ];

    primary = 'По жанру';

    ascending = false;

    onClick(item: string) {
        if (this.items[0].indexOf(item) !== -1) {
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
