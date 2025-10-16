import {Directive} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectMobileRes} from '@taiga-ui/core/services';
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
        toSignal(tuiInjectMobileRes().pipe(map((mobile) => (mobile ? 'm' : 'l'))), {
            initialValue: 'm' as const,
        }),
    );
}
