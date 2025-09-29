import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_BADGE_OPTIONS} from './badge.options';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/badge.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-badge'},
})
class Styles {}

@Directive({
    // tui-icon[tuiBadge] is required to avoid double matching of TuiIcons
    selector: 'tui-badge,[tuiBadge],tui-icon[tuiBadge]',
    providers: [provideStyles(Styles), tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons, TuiWithStyles],
    host: {'[attr.data-size]': 'size()'},
})
export class TuiBadge {
    public readonly size = input(inject(TUI_BADGE_OPTIONS).size);
}
