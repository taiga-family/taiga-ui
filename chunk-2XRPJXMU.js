import"./chunk-HU6DUUP4.js";var e=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiGroup, TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
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
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject<readonly string[]>('Pythons' as any);

    protected value = this.items.map(TUI_FALSE_HANDLER) as boolean[];
}
`;export{e as default};
