import {Component} from '@angular/core';

import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'shadows',
    templateUrl: './shadows.template.html',
    styleUrls: ['./shadows.style.less'],
    changeDetection,
})
export class ShadowsComponent {}
