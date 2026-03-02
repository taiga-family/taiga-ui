import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_BREAKPOINT, TuiButton, TuiPopup} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    imports: [TuiActionBar, TuiButton, TuiPopup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly breakpoint = inject(TUI_BREAKPOINT);
    protected open = signal(false);

    protected readonly isMobile = computed(() => this.breakpoint() === 'mobile');
}
`;export{o as default};
