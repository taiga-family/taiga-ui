import {Component, Inject} from '@angular/core';
import {TUI_MONTHS} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-7',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample7 {
    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<string[]>) {}
}
