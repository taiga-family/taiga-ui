import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlert, TuiButton} from '@taiga-ui/core';

@Component({
    selector: 'tui-alerts-example-6',
    imports: [TuiAlert, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = false;
}
