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
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

import {TUI_LINK_OPTIONS} from './link.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./link.style.less'],
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
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIcons,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    host: {
        tuiLink: '',
        '[class._pseudo]': 'pseudo',
    },
})
export class TuiLink {
    protected readonly nothing = tuiWithStyles(TuiLinkStyles);

    @Input()
    public pseudo = inject(TUI_LINK_OPTIONS).pseudo;
}
