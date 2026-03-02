import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip, TuiItem, TuiItemsWithMore],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly required = 3;

    protected getRemaining(index: number): number {
        const offset = index < this.required ? index + 2 : index + 1;

        return this.items.length - offset;
    }
}
`;export{i as default};
