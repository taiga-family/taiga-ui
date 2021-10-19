import {Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'elderly',
    styleUrls: ['./elderly.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ElderlyComponent extends AbstractTuiThemeSwitcher {}
