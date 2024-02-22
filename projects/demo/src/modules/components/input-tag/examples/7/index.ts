import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-tag-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTagExample7 {
    protected value = ['Use', 'space', 'button'];
    protected customSeparator = /[\s,]/; // Use space or comma to create new tag
}
