import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiTablePagination, type TuiTablePaginationEvent} from '@taiga-ui/addon-table';

@Component({
    imports: [TuiDemo, TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly itemsVariants = [
        [10, 20, 50, 100],
        [10, 100, 500],
    ];

    protected total = 1000;
    protected page = 5;
    protected items = this.itemsVariants[0]!;
    protected size = this.items[0]!;

    protected update({page, size}: TuiTablePaginationEvent): void {
        this.page = page;
        this.size = size;
    }

    protected totalChange(total: number): void {
        this.total = total;
        this.size = Math.min(this.size, Math.max(total, 1));
    }
}
`;export{a as default};
