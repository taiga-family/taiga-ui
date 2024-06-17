import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertDirective, TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-6',
    imports: [TuiButtonDirective, TuiAlertDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = false;
}
