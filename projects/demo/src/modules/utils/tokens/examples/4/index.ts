import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk';

@Component({
    selector: `tui-token-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiTokensExample4 {
    constructor(@Inject(TUI_IS_ANDROID) readonly isAndroid: boolean) {}
}
