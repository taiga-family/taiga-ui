import {Component, Inject} from '@angular/core';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample4 {
    constructor(@Inject(TUI_IS_ANDROID) readonly isAndroid: boolean) {}
}
