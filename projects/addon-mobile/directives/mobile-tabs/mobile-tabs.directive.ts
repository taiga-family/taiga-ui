import {Directive, HostBinding, Inject} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS, TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TUI_TAB_MARGIN} from '@taiga-ui/kit';

import {TuiMobileTabsComponent} from './mobile-tabs.component';

// @dynamic
@Directive({
    selector: `[tuiMobileTabs]`,
    providers: [
        {
            provide: TUI_TAB_MARGIN,
            useValue: 0,
        },
    ],
})
export class TuiMobileTabsDirective {
    constructor(
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(TUI_IS_ANDROID) private readonly isAndroid: boolean,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiMobileTabsComponent);
    }

    @HostBinding(`attr.data-platform`)
    get platform(): 'ios' | 'android' | null {
        if (this.isIos) {
            return `ios`;
        }

        if (this.isAndroid) {
            return `android`;
        }

        return null;
    }
}
