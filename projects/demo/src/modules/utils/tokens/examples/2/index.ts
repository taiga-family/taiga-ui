import {Component, Inject, Optional} from '@angular/core';
import {TUI_DIALOGS} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample2 {
    constructor(
        @Optional()
        @Inject(TUI_DIALOGS)
        readonly dialogs: readonly Observable<readonly unknown[]>[] | null,
    ) {}
}
