import {computed, Directive, inject} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';

import {TuiAppBarComponent} from './app-bar.component';

@Directive({selector: 'tui-app-bar[tuiAppBarSize]'})
export class TuiAppBarSizeDirective {
    private readonly platform = inject(TUI_PLATFORM);
    protected readonly size = tuiDirectiveBinding(
        TuiAppBarComponent,
        'size',
        computed(() => (this.platform === 'web' ? 'l' : 'm')),
    );
}
