import {Directive, inject, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TuiIconsDirective} from '@taiga-ui/core/directives/icons';

import {TuiLinkComponent} from './link.component';
import {TUI_LINK_OPTIONS} from './link.options';

@Directive({
    standalone: true,
    selector: 'a[tuiLink], button[tuiLink]',
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
    host: {
        tuiLink: '',
        '[class._pseudo]': 'pseudo',
    },
})
export class TuiLinkDirective {
    @Input()
    public pseudo = inject(TUI_LINK_OPTIONS).pseudo;

    protected readonly nothing = tuiWithStyles(TuiLinkComponent);
}
