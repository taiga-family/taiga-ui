import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiIcon,
    TuiLink,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiChevron,
        TuiDropdownOptionsDirective,
        TuiLink,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
        TuiIcon,
        NgIf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
