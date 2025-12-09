import {Component, computed, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_MOBILE_BREAKPOINT, TuiButton, type TuiSizeL} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    imports: [TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(TUI_MOBILE_BREAKPOINT);
    protected size = computed<TuiSizeL>(() => (this.isMobile() ? 'm' : 'l'));
}
