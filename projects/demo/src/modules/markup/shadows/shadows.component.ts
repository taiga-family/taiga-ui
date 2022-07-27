import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `shadows`,
    templateUrl: `./shadows.template.html`,
    styleUrls: [`./shadows.style.less`],
    changeDetection,
})
export class ShadowsComponent {}
