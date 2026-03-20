import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TUI_COMMON_ICONS, TUI_ICON_END} from '@taiga-ui/core/tokens';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {TuiShrinkWrapDirective} from '@taiga-ui/kit/components/shrink-wrap';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/toast.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-toast-v5'},
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
    hostDirectives: [TuiWithIcons, TuiShrinkWrapDirective],
})
export class TuiToastDirective {
    public readonly tuiShrinkWrap = input('min(calc(100vw - 2rem), 25rem)');

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly width = tuiDirectiveBinding(
        TuiShrinkWrapDirective,
        'tuiShrinkWrap',
        this.tuiShrinkWrap,
    );
}
