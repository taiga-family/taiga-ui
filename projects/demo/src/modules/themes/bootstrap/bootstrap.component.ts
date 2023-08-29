import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'bootstrap',
    template: '',
    styleUrls: ['./bootstrap.style.less'],
    changeDetection,
    encapsulation: ViewEncapsulation.None,
})
export class BootstrapComponent extends AbstractTuiThemeSwitcher {}
