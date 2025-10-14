import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {injectContext} from '@taiga-ui/polymorpheus';

export interface TuiPositionOptions {
    readonly block: 'end' | 'start';
    readonly inline: 'center' | 'end' | 'start';
}

@Component({
    template: '',
    styleUrl: './notification.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-notification-styles'},
})
class Styles {}

@Directive({
    host: {
        role: 'alert',
        tuiPopover: '',
        '[attr.data-block]': 'context.block',
        '[attr.data-inline]': 'context.inline',
    },
})
export class TuiNotificationDirective {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly context = injectContext<TuiPositionOptions>();
}
