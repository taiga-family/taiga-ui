import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSvgModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-notifications-service-example-custom-label',
    imports: [CommonModule, TuiSvgModule],
    templateUrl: './custom-label.template.html',
    styleUrls: ['./custom-label.style.less'],
    changeDetection,
})
export class CustomLabelComponent {}
