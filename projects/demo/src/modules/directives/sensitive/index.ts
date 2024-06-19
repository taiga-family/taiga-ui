import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotification} from '@taiga-ui/core';
import {TuiSensitiveDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotification, TuiSensitiveDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected sensitive = true;
}
