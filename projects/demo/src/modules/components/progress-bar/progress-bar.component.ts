import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-progress-bar',
    templateUrl: './progress-bar.component.html',
    changeDetection,
})
export class ExampleProgressBarComponent {
    readonly basicExample: FrontEndExample = {
        HTML: example1Html,
        TypeScript: example1Ts,
        LESS: example1Less,
    };
}
