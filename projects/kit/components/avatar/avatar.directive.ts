import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

import {TUI_AVATAR_OPTIONS} from './avatar.options';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/avatar.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-avatar'},
})
class Styles {}

@Directive({
    selector: '[tuiAvatar]',
    providers: [provideStyles(Styles), tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
    hostDirectives: [
        TuiWithAppearance,
        TuiWithStyles,
        {
            directive: TuiIcons,
            inputs: ['iconStart: tuiAvatar'],
        },
    ],
    host: {
        tuiAvatar: '',
        '[attr.data-size]': 'size()',
        '[attr.data-shape]': 'round() ? "round" : "square"',
        '[class._initials]': 'icons.iconStart()?.length < 3',
        '[class._fallback]': 'fallback()',
        '[class._badge]': 'badge()',
        '[style.--t-badge]': 'badge()',
        '(error.capture)': 'fallback.set(true)',
        '(load.capture)': 'fallback.set(false)',
    },
})
export class TuiAvatar {
    private readonly options = inject(TUI_AVATAR_OPTIONS);

    protected readonly icons = inject(TuiIcons);
    protected readonly fallback = signal(false);

    public readonly size = input(this.options.size);
    public readonly round = input(this.options.round);
    public readonly badge = input('');
}
