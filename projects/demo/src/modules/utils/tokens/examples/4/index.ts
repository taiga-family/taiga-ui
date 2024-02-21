import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-token-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample4 {
    readonly isAndroid = inject(TUI_IS_ANDROID);
}
