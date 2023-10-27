import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-cell-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCellExample2 {
    incoming = false;
    outgoing = true;
}
