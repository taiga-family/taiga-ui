import {Component, inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-token-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample6 {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
