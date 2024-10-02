import {NgIf} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [NgIf, TuiActionBar, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
    );
}
