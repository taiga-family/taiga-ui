import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlert, TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-6',
    imports: [TuiButton, TuiAlert],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = false;
}
