import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./card.style.less', './large.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card-large',
    },
})
class TuiCardLargeStyles {}

@Directive({
    standalone: true,
    selector: '[tuiCardLarge]',
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'space || "normal"',
    },
})
export class TuiCardLarge {
    protected readonly nothing = tuiWithStyles(TuiCardLargeStyles);

    @Input('tuiCardLarge')
    public space: '' | 'compact' | 'normal' = 'normal';
}
