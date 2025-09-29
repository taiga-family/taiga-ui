import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_LINK_OPTIONS} from './link.options';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/link.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-link'},
})
class Styles {}

@Directive({
    selector: 'a[tuiLink], button[tuiLink]',
    providers: [provideStyles(Styles), tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons, TuiWithStyles],
    host: {
        tuiLink: '',
        '[style.text-decoration-line]': 'pseudo ? "underline" : null',
    },
})
export class TuiLink {
    /**
     * @deprecated: use on host
     * [style.text-decoration-line]="'underline'"
     */
    @Input()
    public pseudo = inject(TUI_LINK_OPTIONS).pseudo;
}
