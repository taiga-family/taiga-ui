import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {tuiAmountOptionsProvider} from '@taiga-ui/experimental';

@Component({
    selector: 'tui-block-details-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({sign: 'always'})],
})
export class TuiBlockDetailsExample2 {
    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}
}
