import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: `elderly`,
    styleUrls: [`./elderly.style.less`],
    template: ``,
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ElderlyComponent extends AbstractTuiThemeSwitcher {}
