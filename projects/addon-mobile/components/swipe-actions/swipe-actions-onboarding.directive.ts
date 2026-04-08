import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    model,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './swipe-actions-onboarding.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-swipe-actions-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: 'tui-swipe-actions[onboarding]',
    host: {
        '[class._onboarding]': 'onboarding()',
        '(animationend)': 'onboarding.set($event.animationName !== "tuiOnboardingExit")',
    },
})
export class TuiSwipeActionsOnboarding {
    public readonly onboarding = model(true);

    protected readonly nothing = tuiWithStyles(Styles);
}
