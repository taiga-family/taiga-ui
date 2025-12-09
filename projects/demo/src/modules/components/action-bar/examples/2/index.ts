import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_MOBILE_BREAKPOINT, TuiButton, TuiPopup} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    imports: [TuiActionBar, TuiButton, TuiPopup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);
    protected readonly isMobile = inject(TUI_MOBILE_BREAKPOINT);
}
