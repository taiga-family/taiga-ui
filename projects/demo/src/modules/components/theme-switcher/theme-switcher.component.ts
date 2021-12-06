import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/elderly/elderly.component.ts';
import {default as example1Less} from '!!raw-loader!./examples/elderly/elderly.style.less';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-theme-switcher',
    templateUrl: './theme-switcher.template.html',
    styleUrls: ['./theme-switcher.style.less'],
    changeDetection,
})
export class ExampleTuiThemeSwitcherComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };
}
