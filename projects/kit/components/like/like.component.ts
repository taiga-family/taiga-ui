import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TUI_ICON_END, TUI_ICON_START} from '@taiga-ui/core/tokens';

import {TUI_LIKE_OPTIONS} from './like.options';

@Component({
    standalone: true,
    selector: 'input[tuiLike][type=checkbox]',
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/like.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAppearanceOptionsProvider(TUI_LIKE_OPTIONS),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_LIKE_OPTIONS).icons.unchecked,
        },
        {
            provide: TUI_ICON_END,
            useFactory: () => inject(TUI_LIKE_OPTIONS).icons.checked,
        },
    ],
    hostDirectives: [
        TuiWithAppearance,
        {
            directive: TuiIcons,
            inputs: ['iconStart: uncheckedIcon', 'iconEnd: checkedIcon'],
        },
    ],
    host: {
        tuiLike: '',
        '[attr.data-size]': 'size()',
        '[attr.data-mode]': '""',
        '[style.--t-icon-color]': 'color()',
    },
})
export class TuiLike {
    public readonly color = input('', {alias: 'tuiLike'});
    public readonly size = input(inject(TUI_LIKE_OPTIONS).size);
}
