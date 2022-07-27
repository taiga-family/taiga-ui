import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `typography`,
    templateUrl: `./typography.template.html`,
    styleUrls: [`./typography.style.less`],
    changeDetection,
})
export class TypographyComponent {}
