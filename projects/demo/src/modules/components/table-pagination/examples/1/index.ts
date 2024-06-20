import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTablePaginationEvent} from '@taiga-ui/addon-table';
import {TuiTablePagination} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected page = 3;
    protected size = 10;

    protected onPagination({page, size}: TuiTablePaginationEvent): void {
        this.page = page;
        this.size = size;
    }
}
