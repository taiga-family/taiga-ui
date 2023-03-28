import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-expand-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiExpandExample2 {
    show = true;
    error = true;
}
