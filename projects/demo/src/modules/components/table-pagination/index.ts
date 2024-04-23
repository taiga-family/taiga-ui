import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import type {TuiTablePagination} from '@taiga-ui/addon-table';
import {TuiTablePaginationComponent} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [
        TuiAddonDocModule,
        TuiTablePaginationComponent,
        TuiSetupComponent,
        TuiComponentPipe,
        TuiExamplePipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly itemsVariants = [
        [10, 20, 50, 100],
        [10, 100, 500],
    ];

    protected total = 1000;
    protected page = 5;
    protected items = this.itemsVariants[0];
    protected size = this.items[0];

    protected update({page, size}: TuiTablePagination): void {
        this.page = page;
        this.size = size;
    }
}
