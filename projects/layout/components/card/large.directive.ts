import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiWithAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiSurface} from '@taiga-ui/layout/components/surface';

export const [TUI_CARD_OPTIONS, tuiCardOptionsProvider] = tuiCreateOptions({
    space: 'normal' as 'compact' | 'normal',
});

@Component({
    template: '',
    styleUrls: ['./card.style.less', './large.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-large'},
})
class Styles {}

@Directive({
    selector: '[tuiCardLarge]',
    hostDirectives: [TuiWithAppearance, TuiSurface],
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'tuiCardLarge() || this.options.space',
    },
})
export class TuiCardLarge {
    protected readonly options = inject(TUI_CARD_OPTIONS);
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiCardLarge = input<'' | 'compact' | 'normal'>('');
}
