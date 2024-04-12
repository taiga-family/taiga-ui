import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule, TuiSetupComponent} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiSetupComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}
