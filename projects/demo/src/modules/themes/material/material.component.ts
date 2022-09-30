import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: `material`,
    styleUrls: [`./material.style.less`],
    template: ``,
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class MaterialComponent extends AbstractTuiThemeSwitcher {}
