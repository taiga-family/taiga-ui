import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TUI_COMMON_ICONS, TUI_ICON_END} from '@taiga-ui/core/tokens';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/toast.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-toast',
    },
})
class TuiToastStyles {}

@Directive({
    standalone: true,
    selector: '[tuiToast]',
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
                inject(ElementRef).nativeElement?.matches('a, button')
                    ? inject(TUI_COMMON_ICONS).more
                    : '',
        },
    ],
    hostDirectives: [TuiWithIcons],
})
export class TuiToast {
    protected readonly nothing = tuiWithStyles(TuiToastStyles);
}
