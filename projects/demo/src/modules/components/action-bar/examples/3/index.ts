import {Component, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiInjectMobileRes} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiActionBar, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);

    protected readonly isMobile = toSignal(tuiInjectMobileRes());
}
