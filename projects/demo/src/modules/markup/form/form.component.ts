import {default as example1Html} from '!!raw-loader!./example/index.html';
import {default as example1Less} from '!!raw-loader!./example/index.style.less';
import {default as example1Ts} from '!!raw-loader!./example/index.ts';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-form',
    templateUrl: 'form.template.html',
    changeDetection,
})
export class FormComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };
}
