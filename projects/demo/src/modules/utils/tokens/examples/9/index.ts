import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DATE_FORMAT} from '@taiga-ui/core';

@Component({
    selector: 'tui-token-example-9',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample9 {
    protected readonly TuiDateFormatSettings = inject(TUI_DATE_FORMAT);
}
