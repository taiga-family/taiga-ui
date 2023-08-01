import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textarea-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTextareaExample5 {
    value = '';
}
