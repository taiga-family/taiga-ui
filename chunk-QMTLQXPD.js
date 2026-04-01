import"./chunk-HU6DUUP4.js";var e=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiItemsWithMore],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
`;export{e as default};
