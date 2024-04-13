import {Component} from '@angular/core';
import {TuiSvgComponent} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    standalone: true,
    selector: 'tui-notifications-service-example-custom-label',
    imports: [TuiSvgComponent],
    templateUrl: './custom-label.template.html',
    styleUrls: ['./custom-label.style.less'],
    changeDetection,
})
export class CustomLabelComponent {}
