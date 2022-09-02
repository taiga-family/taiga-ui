import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE_RES} from '@taiga-ui/core';
import type {Observable} from 'rxjs';

@Component({
    selector: `tui-token-example-7`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiTokensExample7 {
    constructor(@Inject(TUI_IS_MOBILE_RES) readonly isMobileRes$: Observable<boolean>) {}
}
