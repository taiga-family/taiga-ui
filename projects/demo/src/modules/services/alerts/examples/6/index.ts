import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-alerts-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAlertsExampleComponent6 {
    show = false;
}
