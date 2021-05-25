import {Component, Inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample6 {
    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}
}
