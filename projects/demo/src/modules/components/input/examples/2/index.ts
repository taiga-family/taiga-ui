import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputExample2 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('mail@mail.ru'),
    });
}
