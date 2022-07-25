import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_IOS} from '@taiga-ui/cdk';

@Component({
    selector: `tui-token-example-5`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiTokensExample5 {
    constructor(@Inject(TUI_IS_IOS) readonly isIos: boolean) {}
}
