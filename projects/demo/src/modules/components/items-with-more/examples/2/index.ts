import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ITEMS} from '@demo/tokens';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiGroup, TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiBadge,
        TuiBlock,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiGroup,
        TuiIcon,
        TuiItem,
        TuiItemsWithMore,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject(ITEMS);

    protected value = this.items.map(TUI_FALSE_HANDLER) as boolean[];
}
