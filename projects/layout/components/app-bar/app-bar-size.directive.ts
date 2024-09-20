import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk';
import {TuiBreakpointService} from '@taiga-ui/core';
import {map} from 'rxjs';

import {TuiAppBarComponent} from './app-bar.component';

// TODO: Make size automatic based on tuiPlatform in v5
@Directive({
    standalone: true,
    selector: 'tui-app-bar[tuiAppBarSize]',
})
export class TuiAppBarSizeDirective {
    protected readonly size = tuiDirectiveBinding(
        TuiAppBarComponent,
        'size',
        toSignal(
            inject(TuiBreakpointService).pipe(
                map((breakpoint) => (breakpoint === 'mobile' ? 'm' : 'l')),
            ),
            {initialValue: 'm' as const},
        ),
    );
}
