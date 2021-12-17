import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {DemoTuiIconsTabs, TUI_DEMO_ICONS} from './icons.tokens';

@Component({
    selector: 'icons',
    templateUrl: 'icons.template.html',
    changeDetection,
})
export class IconsComponent {
    readonly keys = Object.keys(this.icons);

    constructor(@Inject(TUI_DEMO_ICONS) readonly icons: DemoTuiIconsTabs) {}
}
