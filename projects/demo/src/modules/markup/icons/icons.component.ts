import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {DemoTuiIconsTabs, TUI_DEMO_ICONS} from './icons.tokens';

@Component({
    selector: `icons`,
    templateUrl: `./icons.template.html`,
    styleUrls: [`./icons.style.less`],
    changeDetection,
})
export class IconsComponent {
    readonly keys = Object.keys(this.icons);

    readonly example1: TuiDocExample = {
        TypeScript: import(
            `!!raw-loader!./customization/customization-icons.component.ts`
        ),
        HTML: import(`!!raw-loader!./customization/customization-icons.template.html`),
        LESS: import(`!!raw-loader!./customization/customization-icons.style.less`),
    };

    constructor(@Inject(TUI_DEMO_ICONS) readonly icons: DemoTuiIconsTabs) {}
}
