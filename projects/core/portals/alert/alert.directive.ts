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
    styleUrl: './alert.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-alert-styles'},
})
class Styles {}

@Directive({
    host: {
        role: 'alert',
        tuiAlert: '',
        '[attr.data-block]': 'context.block',
        '[attr.data-inline]': 'context.inline',
    },
})
export class TuiAlertDirective {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly context = injectContext<TuiPositionOptions>();
}
