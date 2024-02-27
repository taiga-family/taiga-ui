import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DIALOGS} from '@taiga-ui/core';

@Component({
    selector: 'tui-token-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample2 {
    protected readonly dialogs = inject(TUI_DIALOGS);
}
