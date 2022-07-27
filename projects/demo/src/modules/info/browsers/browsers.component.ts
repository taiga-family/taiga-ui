import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `browsers`,
    templateUrl: `browsers.template.html`,
    styleUrls: [`./browsers.style.less`],
    changeDetection,
})
export class BrowsersComponent {}
