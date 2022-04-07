import {Directive, HostBinding, Inject} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS, TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiMobileTabsComponent} from './mobile-tabs.component';

// @dynamic
@Directive({
    selector: '[tuiMobileTabs]',
})
export class TuiMobileTabsDirective {
    constructor(
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(TUI_IS_ANDROID) private readonly isAndroid: boolean,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiMobileTabsComponent);
    }

    @HostBinding('attr.data-platform')
    get platform(): string | null {
        if (this.isIos) {
            return 'ios';
        }

        if (this.isAndroid) {
            return 'android';
        }

        return null;
    }
}
