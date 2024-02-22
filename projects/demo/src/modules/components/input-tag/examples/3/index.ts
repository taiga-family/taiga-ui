import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-tag-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTagExample3 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(['I', 'love', 'Angular']),
    });
}
