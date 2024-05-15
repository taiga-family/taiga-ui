import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemoModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly provide = import('./examples/import/provide.md?raw');
}
