import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {map} from 'rxjs';

import {TuiAppBarComponent} from './app-bar.component';

// TODO: Make size automatic based on tuiPlatform in v5
@Directive({
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
