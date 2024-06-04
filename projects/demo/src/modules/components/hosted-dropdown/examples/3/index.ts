import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListComponent,
    TuiLinkDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiHostedDropdownModule,
        TuiSvgComponent,
        TuiLinkDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
        NgIf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
