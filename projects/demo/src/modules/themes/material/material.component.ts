import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'material',
    template: '',
    styleUrls: ['./material.style.less'],
    changeDetection,
    encapsulation: ViewEncapsulation.None,
})
export class MaterialComponent extends AbstractTuiThemeSwitcher {}
