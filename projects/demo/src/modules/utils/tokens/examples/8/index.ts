import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiNumberFormatSettings} from '@taiga-ui/core';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';

@Component({
    selector: 'tui-token-example-8',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample8 {
    constructor(
        @Inject(TUI_NUMBER_FORMAT)
        readonly TuiNumberFormatSettings: TuiNumberFormatSettings,
    ) {}
}
