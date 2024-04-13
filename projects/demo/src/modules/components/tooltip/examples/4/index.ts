import {Component} from '@angular/core';
import {tuiHintOptionsProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-tooltip-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiHintOptionsProvider({
            icon: 'tuiIconCameraLarge',
        }),
    ],
})
export class TuiTooltipExample4 {}
