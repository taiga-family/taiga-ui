import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'mixins',
    templateUrl: './mixins.template.html',
    styleUrls: ['./mixins.style.less'],
    changeDetection,
})
export class MixinsComponent {}
