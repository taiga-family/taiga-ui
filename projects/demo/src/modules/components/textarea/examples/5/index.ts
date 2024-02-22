import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textarea-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTextareaExample5 {
    protected value = '';
}
