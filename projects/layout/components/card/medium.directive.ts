import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiWithAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {TuiSurface} from '@taiga-ui/layout/components/surface';

@Component({
    template: '',
    styleUrl: '../../../styles/components/card.less',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/card-medium.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-card-medium-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiCardMedium]',
    providers: [tuiAvatarOptionsProvider({size: 'l'})],
    hostDirectives: [TuiWithAppearance, TuiSurface],
})
export class TuiCardMedium {
    protected readonly nothing = tuiWithStyles(Styles);
}
