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
export class TuiCardMedium {
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
export class TuiCardLarge {
    protected readonly nothing = tuiWithStyles(TuiCardStyles);

    @Input('tuiCardLarge')
    public space: '' | 'compact' | 'normal' = 'normal';
}
