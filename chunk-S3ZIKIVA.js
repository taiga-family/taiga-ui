import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_BREAKPOINT, TuiButton, type TuiSizeL} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    imports: [TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpoint = inject(TUI_BREAKPOINT);

    protected size = computed<TuiSizeL>(() =>
        this.breakpoint() === 'mobile' ? 'm' : 'l',
    );
}
`;export{o as default};
