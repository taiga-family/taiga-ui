import {Component, inject} from '@angular/core';
import {TUI_IS_MOBILE_RES} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-token-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample7 {
    protected readonly isMobileRes$ = inject(TUI_IS_MOBILE_RES);
}
