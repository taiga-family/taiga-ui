import {Component, Inject} from '@angular/core';
import {NumberFormatSettings, TUI_NUMBER_FORMAT} from '@taiga-ui/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-8',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample8 {
    constructor(
        @Inject(TUI_NUMBER_FORMAT)
        readonly numberFormatSettings: NumberFormatSettings,
    ) {}
}
