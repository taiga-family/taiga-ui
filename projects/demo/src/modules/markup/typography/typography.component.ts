import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'typography',
    templateUrl: './typography.template.html',
    styleUrls: ['./typography.style.less'],
    changeDetection,
})
export class TypographyComponent {}
