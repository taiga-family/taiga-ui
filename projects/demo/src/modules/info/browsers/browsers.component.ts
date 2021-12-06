import {Component} from '@angular/core';

import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'browsers',
    templateUrl: 'browsers.template.html',
    styleUrls: ['./browsers.style.less'],
    changeDetection,
})
export class BrowsersComponent {}
