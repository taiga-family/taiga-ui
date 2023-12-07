import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-tables-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTablesExample1 {
    testValue = new UntypedFormControl(true);
}
