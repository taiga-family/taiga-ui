import {Component, Inject} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample5 {
    constructor(@Inject(TUI_IS_IOS) readonly isIos: boolean) {}
}
