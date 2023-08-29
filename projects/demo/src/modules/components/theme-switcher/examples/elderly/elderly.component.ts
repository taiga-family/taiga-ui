import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'elderly',
    template: '',
    styleUrls: ['./elderly.style.less'],
    changeDetection,
    encapsulation: ViewEncapsulation.None,
})
export class ElderlyComponent extends AbstractTuiThemeSwitcher {}
