import {Directive, HostBinding, inject} from '@angular/core';
import type {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_IS_ANDROID, TUI_IS_IOS, tuiWithStyles} from '@taiga-ui/cdk';
import {TUI_TAB_MARGIN} from '@taiga-ui/kit';

import {TuiMobileTabsComponent} from './mobile-tabs.component';

@Directive({
    selector: '[tuiMobileTabs]',
    providers: [
        {
            provide: TUI_TAB_MARGIN,
            useValue: 0,
        },
    ],
})
export class TuiMobileTabsDirective {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly isAndroid = inject(TUI_IS_ANDROID);
    protected readonly nothing = tuiWithStyles(TuiMobileTabsComponent);

    // TODO: Refactor with TUI_PLATFORM
    @HostBinding('attr.data-platform')
    protected get platform(): TuiPlatform | null {
        if (this.isIOS) {
            return 'ios';
        }

        if (this.isAndroid) {
            return 'android';
        }

        return null;
    }
}
