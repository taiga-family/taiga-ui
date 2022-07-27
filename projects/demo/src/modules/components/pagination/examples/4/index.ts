import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-pagination-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiPaginationExample4 {
    readonly days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];
}
