import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [TuiChevron, TuiDataList, TuiDropdown, TuiIcon, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
        if (this.items[0]?.includes(item)) {
            this.primary = item;

            return;
        }

        this.ascending = item === this.items[1]?.[0];
    }

    protected itemIsActive(item: string): boolean {
        return (
            item === this.primary ||
            (this.ascending && item === this.items[1]?.[0]) ||
            (!this.ascending && item === this.items[1]?.[1])
        );
    }
}
`;export{i as default};
