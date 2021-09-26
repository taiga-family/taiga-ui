import {Component, Inject, Optional} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-3',
    templateUrl: './index.html',
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
