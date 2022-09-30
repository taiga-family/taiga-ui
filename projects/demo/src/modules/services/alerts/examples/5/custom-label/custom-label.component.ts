import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-notifications-service-example-custom-label`,
    templateUrl: `./custom-label.template.html`,
    styleUrls: [`./custom-label.style.less`],
    changeDetection,
})
export class CustomLabelComponent {}
