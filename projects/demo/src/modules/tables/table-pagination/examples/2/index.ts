import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiTablePaginationOptions,
    tuiTablePaginationOptionsProvider,
} from '@taiga-ui/addon-table';

const customOptionContent: TuiTablePaginationOptions['sizeOptionContent'] = ({
    $implicit,
    total,
}) => {
    switch ($implicit) {
        case 10:
            return 'Ten';
        case total:
            return 'Show all rows';
        default:
            return $implicit;
    }
};

@Component({
    selector: 'tui-table-pagination-example-2',
    templateUrl: './index.html',
    providers: [
        tuiTablePaginationOptionsProvider({sizeOptionContent: customOptionContent}),
    ],
    changeDetection,
    encapsulation,
})
export class TuiTablePaginationExample2 {
    total = 350;
    sizeOptions = [10, 50, 100, this.total];
}
