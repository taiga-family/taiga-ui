import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

import {TUI_AVATAR_OPTIONS} from './avatar.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/avatar.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-avatar-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiAvatar]',
    providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
    hostDirectives: [
        TuiWithAppearance,
        {
            directive: TuiIcons,
            inputs: ['iconStart: tuiAvatar'],
        },
    ],
    host: {
        tuiAvatar: '',
        '[attr.data-shape]': 'round() ? "round" : "square"',
        '[attr.data-size]': 'size()',
        '[class._badge]': 'badge()',
        '[class._fallback]': 'fallback()',
        '[class._initials]': 'icons.iconStart()?.length < 3',
        '[style.--t-badge]': 'badge()',
        '(error.capture)': 'fallback.set(true)',
        '(load.capture)': 'fallback.set(false)',
    },
})
export class TuiAvatar {
    private readonly options = inject(TUI_AVATAR_OPTIONS);
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly icons = inject(TuiIcons);
    protected readonly fallback = signal(false);
    public readonly size = input(this.options.size);
    public readonly round = input(this.options.round);
    public readonly badge = input('');
}
