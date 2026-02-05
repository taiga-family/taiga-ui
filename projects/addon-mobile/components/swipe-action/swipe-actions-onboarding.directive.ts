import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    model,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './swipe-actions-onboarding.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-swipe-actions'},
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
