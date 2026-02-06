import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

export const [TUI_LINK_OPTIONS, tuiLinkOptionsProvider] = tuiCreateOptions({
    appearance: 'action',
});

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/link.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-link'},
})
class Styles {}

@Directive({
    selector: 'a[tuiLink], button[tuiLink]',
    providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {tuiLink: ''},
})
export class TuiLink {
    protected readonly nothing = tuiWithStyles(Styles);
}
