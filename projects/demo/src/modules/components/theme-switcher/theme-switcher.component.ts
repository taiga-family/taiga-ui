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
        TypeScript: import(`!!raw-loader!./examples/elderly/elderly.component.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/elderly/elderly.style.less`),
    };
}
