import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
        TuiItemsWithMore,
        TuiLink,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
