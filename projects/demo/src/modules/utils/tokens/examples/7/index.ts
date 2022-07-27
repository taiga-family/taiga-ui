import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_MONTHS} from '@taiga-ui/core';
import {Observable} from 'rxjs';

@Component({
    selector: `tui-token-example-7`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiTokensExample7 {
    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<string[]>) {}
}
