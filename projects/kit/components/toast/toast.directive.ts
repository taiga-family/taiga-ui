import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TUI_COMMON_ICONS, TUI_ICON_END} from '@taiga-ui/core/tokens';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/toast.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-toast'},
})
class Styles {}

@Directive({
    selector: '[tuiToast]:not(ng-template)',
    providers: [
        tuiBadgeOptionsProvider({size: 'l'}),
        tuiAvatarOptionsProvider(() => ({
            size: inject(TUI_PLATFORM) === 'web' ? 's' : 'm',
        })),
        tuiButtonOptionsProvider(() => ({
            size: 's',
            appearance:
                inject(TUI_PLATFORM) === 'web' ? 'secondary-grayscale' : 'secondary',
        })),
        {
            provide: TUI_ICON_END,
            useFactory: () =>
                tuiInjectElement().matches('a, button')
                    ? inject(TUI_COMMON_ICONS).more
                    : '',
        },
    ],
    hostDirectives: [TuiWithIcons],
})
export class TuiToastDirective {
    protected readonly nothing = tuiWithStyles(Styles);
}
