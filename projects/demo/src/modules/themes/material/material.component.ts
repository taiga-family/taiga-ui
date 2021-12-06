import {Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

import {changeDetection} from '../../../change-detection-strategy';

// @dynamic
@Component({
    selector: 'material',
    styleUrls: ['./material.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class MaterialComponent extends AbstractTuiThemeSwitcher {}
