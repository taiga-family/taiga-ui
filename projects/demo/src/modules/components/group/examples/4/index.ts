import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-group-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiGroupExample4 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(``),
    });
}
