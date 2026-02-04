import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./swipe-actions-onboarding.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-swipe-actions'},
})
class Styles {}

@Directive({
    standalone: true,
    selector: 'tui-swipe-actions[onboarding]',
    host: {
        '[class._onboarding]': 'onboarding',
        '(animationend)':
            'onboardingChange.emit($event.animationName !== "tuiOnboardingExit")',
    },
})
export class TuiSwipeActionsOnboarding {
    protected readonly nothing = tuiWithStyles(Styles);

    @Input()
    public onboarding = true;

    @Output()
    public readonly onboardingChange = new EventEmitter<boolean>();
}
