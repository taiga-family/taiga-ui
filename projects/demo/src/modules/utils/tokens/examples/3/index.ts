import {Component, inject} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-token-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample3 {
    protected readonly focusable = inject(TUI_FOCUSABLE_ITEM_ACCESSOR, {optional: true});
}
