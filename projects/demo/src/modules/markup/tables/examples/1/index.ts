import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-tables-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTablesExample1 {
    protected testValue = new FormControl(true);
}
