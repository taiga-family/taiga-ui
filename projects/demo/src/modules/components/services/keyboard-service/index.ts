import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotificationComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly inject = import('./examples/inject.md?raw');
}
