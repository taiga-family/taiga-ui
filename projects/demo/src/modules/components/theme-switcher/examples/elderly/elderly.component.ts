import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'elderly',
    template: '',
    styleUrls: ['./elderly.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ElderlyComponent extends AbstractTuiThemeSwitcher {}
