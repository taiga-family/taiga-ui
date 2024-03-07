import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertModule, TuiButtonModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-6',
    imports: [TuiButtonModule, TuiAlertModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent6 {
    protected show = false;
}
