import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiItemsWithMore, TuiChip],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly requiredVariants = [-1, 2, 4];

    protected readonly itemsLimitVariants = [Infinity, 4, 2];

    protected required = this.requiredVariants[0];

    protected itemsLimit = this.itemsLimitVariants[0];
}
