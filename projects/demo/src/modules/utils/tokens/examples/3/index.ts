import {Component, Inject, Optional} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';

@Component({
    selector: `tui-token-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiTokensExample3 {
    constructor(
        @Optional()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,
    ) {}
}
