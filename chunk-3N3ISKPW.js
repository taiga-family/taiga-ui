import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiTablePagination,
    tuiTablePaginationOptionsProvider,
} from '@taiga-ui/addon-table';

@Component({
    selector: 'example-2',
    imports: [TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTablePaginationOptionsProvider({
            sizeOptionContent: ({$implicit, total}) => {
                switch ($implicit) {
                    case 10:
                        return 'Ten';
                    case total:
                        return 'Show all rows';
                    default:
                        return $implicit;
                }
            },
        }),
    ],
})
export default class Example {
    protected total = 350;
    protected sizeOptions = [10, 50, 100, this.total];
}
`;export{i as default};
