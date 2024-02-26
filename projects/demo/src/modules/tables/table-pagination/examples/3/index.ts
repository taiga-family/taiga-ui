import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiTablePaginationOptionsProvider} from '@taiga-ui/addon-table';

@Component({
    selector: 'tui-table-pagination-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTablePaginationOptionsProvider({
            showPages: false,
        }),
    ],
})
export class TuiTablePaginationExample3 {
    protected total = 350;
    protected sizeOptions = [10, 50, 100, this.total];
}
