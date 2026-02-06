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
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_BADGE_OPTIONS} from './badge.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/badge.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-badge'},
})
class Styles {}

@Directive({
    // tui-icon[tuiBadge] is required to avoid double matching of TuiIcons
    selector: '[tuiBadge],tui-icon[tuiBadge]',
    providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {'[attr.data-size]': 'size()'},
})
export class TuiBadge {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly size = input(inject(TUI_BADGE_OPTIONS).size);
}
