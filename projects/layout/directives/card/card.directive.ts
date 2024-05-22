import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./card.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card',
    },
})
class TuiCardStyles {}

@Directive({
    standalone: true,
    selector: '[tuiCardMedium]',
    host: {
        tuiCardMedium: '',
    },
})
export class TuiCardMediumDirective {
    protected readonly nothing = tuiWithStyles(TuiCardStyles);
}

@Directive({
    standalone: true,
    selector: '[tuiCardLarge]',
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'space || "normal"',
    },
})
export class TuiCardLargeDirective {
    @Input('tuiCardLarge')
    public space: '' | 'compact' | 'normal' = 'normal';

    protected readonly nothing = tuiWithStyles(TuiCardStyles);
}
