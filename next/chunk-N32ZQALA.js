import"./chunk-42JZD6NG.js";var o=`import {Component, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton, TuiPopup} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    imports: [TuiActionBar, TuiButton, TuiPopup],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
    );
}
`;export{o as default};
