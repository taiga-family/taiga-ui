import {default as example1Ts} from '!!raw-loader!./examples/prompt/prompt.component.ts';
import {default as example1Less} from '!!raw-loader!./examples/prompt/prompt.style.less';
import {default as example1Html} from '!!raw-loader!./examples/prompt/prompt.template.html';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'dialogs',
    templateUrl: './dialogs.template.html',
    changeDetection,
})
export class DialogsComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };
}
