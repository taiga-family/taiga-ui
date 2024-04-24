import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTablePagination} from '@taiga-ui/addon-table';
import {TuiTablePaginationComponent} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePaginationComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected page = 3;
    protected size = 10;

    protected onPagination({page, size}: TuiTablePagination): void {
        this.page = page;
        this.size = size;
    }
}
