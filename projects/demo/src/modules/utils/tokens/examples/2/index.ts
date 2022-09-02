import {Component, Inject, Optional} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DIALOGS} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';

@Component({
    selector: `tui-token-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiTokensExample2 {
    constructor(
        @Optional()
        @Inject(TUI_DIALOGS)
        readonly dialogs: ReadonlyArray<Observable<readonly unknown[]>> | null,
    ) {}
}
