import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_LINK_OPTIONS} from './link.options';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/link.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-link',
    },
})
class TuiLinkStyles {}

@Directive({
    standalone: true,
    selector: 'a[tuiLink], button[tuiLink]',
    providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {
        tuiLink: '',
        '[style.text-decoration-line]': 'pseudo ? "underline" : null',
    },
})
export class TuiLink {
    protected readonly nothing = tuiWithStyles(TuiLinkStyles);

    @Input()
    public pseudo = inject(TUI_LINK_OPTIONS).pseudo;
}
