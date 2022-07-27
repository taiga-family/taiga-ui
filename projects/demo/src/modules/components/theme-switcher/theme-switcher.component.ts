import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-theme-switcher`,
    templateUrl: `./theme-switcher.template.html`,
    styleUrls: [`./theme-switcher.style.less`],
    changeDetection,
})
export class ExampleTuiThemeSwitcherComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/elderly/elderly.component.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/elderly/elderly.style.less?raw`),
    };
}
