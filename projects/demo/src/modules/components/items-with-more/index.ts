import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiNotificationComponent} from '@taiga-ui/core';
import {TuiChip, TuiItemsWithMoreComponent, TuiMoreDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiItemsWithMoreComponent,
        TuiChip,
        TuiItem,
        TuiMoreDirective,
    ],
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
