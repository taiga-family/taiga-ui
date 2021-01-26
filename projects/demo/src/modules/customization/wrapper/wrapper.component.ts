import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';

import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.template.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class WrapperComponent {
    readonly example1: FrontEndExample = {
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly state: Record<string, string> = {
        '[data-appearance]': 'appearance string',
        '[data-mode]': 'optional "onDark"/"onLight" mode',
        '[data-state]': 'interactive state: "hovered"/"pressed"/"readonly"/"disabled"',
        '._focused': 'class for focused state',
        '._invalid': 'class for invalid state',
    };
}
