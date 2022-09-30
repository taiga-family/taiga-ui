import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiTablePaginationOptionsProvider} from '@taiga-ui/addon-table';

@Component({
    selector: `tui-table-pagination-example-3`,
    templateUrl: `./index.html`,
    providers: [
        tuiTablePaginationOptionsProvider({
            showPages: false,
        }),
    ],
    changeDetection,
    encapsulation,
})
export class TuiTablePaginationExample3 {
    total = 350;
    sizeOptions = [10, 50, 100, this.total];
}
