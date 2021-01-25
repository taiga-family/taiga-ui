import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Ts from '!!raw-loader!./examples/elderly/elderly.component.ts';
import example1Scss from '!!raw-loader!./examples/elderly/elderly.style.scss';
import {Component} from '@angular/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-theme-switcher',
    templateUrl: './theme-switcher.template.html',
    styleUrls: ['./theme-switcher.style.scss'],
    changeDetection,
})
export class ExampleTuiThemeSwitcherComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        SCSS: example1Scss,
    };
}
