import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiBadge, TuiChevron, TuiItemsWithMore, TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiBadge,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiItemsWithMore,
        TuiSegmented,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Overview', 'Activity', 'Messages', 'Files', 'Settings'];
    protected active = 0;
    protected open = false;
}
