import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

export const [TUI_CARD_OPTIONS, tuiCardOptionsProvider] = tuiCreateOptions({
    space: 'normal' as 'compact' | 'normal',
});

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
        '[attr.data-space]': 'space || this.options.space',
    },
})
export class TuiCardLarge {
    protected readonly options = inject(TUI_CARD_OPTIONS);
    protected readonly nothing = tuiWithStyles(TuiCardLargeStyles);

    @Input('tuiCardLarge')
    public space: '' | 'compact' | 'normal' = '';
}
