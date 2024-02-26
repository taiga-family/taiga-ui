import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-sensitive-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSensitiveExample2 {
    protected sensitive = true;
}
