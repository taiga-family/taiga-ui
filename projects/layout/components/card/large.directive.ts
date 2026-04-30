import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiSurface} from '@taiga-ui/layout/components/surface';

import {TUI_CARD_OPTIONS} from './card.options';

@Component({
    template: '',
    styleUrl: './card.style.less',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './large.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-card-large-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiCardLarge]',
    providers: [tuiAppearanceOptionsProvider(TUI_CARD_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiSurface],
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'tuiCardLarge() || this.options.space',
    },
})
export class TuiCardLarge {
    protected readonly options = inject(TUI_CARD_OPTIONS);
    protected readonly nothing = tuiWithStyles(Styles);
    public readonly tuiCardLarge = input(this.options.space);
}
