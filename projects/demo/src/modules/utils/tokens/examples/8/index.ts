import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core';

@Component({
    selector: 'tui-token-example-8',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample8 {
    protected readonly TuiNumberFormatSettings = inject(TUI_NUMBER_FORMAT);
}
