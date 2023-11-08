import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'material',
    template: '',
    styleUrls: ['./material.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class MaterialComponent extends AbstractTuiThemeSwitcher {}
