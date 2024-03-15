import {Component, inject} from '@angular/core';
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
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
