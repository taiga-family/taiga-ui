import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-block-details-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiBlockDetailsExample1 {
    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}
}
