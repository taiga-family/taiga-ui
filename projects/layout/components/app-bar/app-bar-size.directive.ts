import {computed, Directive, inject} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {TUI_BREAKPOINT} from '@taiga-ui/core/tokens';

import {TuiAppBarComponent} from './app-bar.component';

// TODO: Make size automatic based on tuiPlatform in v5
@Directive({
    selector: 'tui-app-bar[tuiAppBarSize]',
})
export class TuiAppBarSizeDirective {
    protected readonly size = tuiDirectiveBinding(
        TuiAppBarComponent,
        'size',
        computed(() => (inject(TUI_BREAKPOINT)() === 'mobile' ? 'm' : 'l')),
    );
}
