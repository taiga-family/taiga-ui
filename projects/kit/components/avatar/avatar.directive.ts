import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

import {TUI_AVATAR_OPTIONS} from './avatar.options';

@Component({
    standalone: true,
    template: '',
    styleUrl: './avatar.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-avatar',
    },
})
class TuiAvatarStyles {}

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
        '[attr.data-size]': 'size',
        '[class._round]': 'round',
        '[class._initials]': 'icons.iconStart()?.length < 3',
        '[class._fallback]': 'fallback()',
        '(error.capture)': 'fallback.set(true)',
        '(load.capture)': 'fallback.set(false)',
    },
})
export class TuiAvatar {
    private readonly options = inject(TUI_AVATAR_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiAvatarStyles);
    protected readonly icons = inject(TuiIcons);
    protected readonly fallback = signal(false);

    @Input()
    public size = this.options.size;

    @Input()
    public round = this.options.round;
}
