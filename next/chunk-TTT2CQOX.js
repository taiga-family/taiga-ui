import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip, TuiItem, TuiItemsWithMore],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
    ];

    protected linesLimit = 2;
    protected lastIndex = Infinity;

    protected getRemaining(index: number): number {
        const offset = index + 1;

        return this.items.length - offset;
    }
}
`;export{i as default};
