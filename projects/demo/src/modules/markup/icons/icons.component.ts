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
        TypeScript: import(`./customization/customization-icons.component.ts?raw`),
        HTML: import(`./customization/customization-icons.template.html?raw`),
        LESS: import(`./customization/customization-icons.style.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./inline-svg/inline-svg.component.ts?raw`),
        LESS: import(`./inline-svg/inline-svg.style.less?raw`),
    };

    constructor(@Inject(TUI_DEMO_ICONS) readonly icons: DemoTuiIconsTabs) {}
}
