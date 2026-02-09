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
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiCheckboxOptionsProvider} from '@taiga-ui/core/components/checkbox';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiSwitchOptionsProvider} from '@taiga-ui/kit/components/switch';

import {TUI_CHIP_OPTIONS} from './chip.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/chip.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-chip'},
})
class Styles {}

@Directive({
    selector: '[tuiChip]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS),
        tuiSwitchOptionsProvider({size: 's'}),
        tuiCheckboxOptionsProvider({size: 's'}),
        tuiAvatarOptionsProvider(() => ({
            size: 'xs',
            round: inject(TUI_PLATFORM) !== 'web',
        })),
        tuiButtonOptionsProvider({size: 'xs', appearance: 'icon'}),
    ],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {'[attr.data-size]': 'size()'},
})
export class TuiChip {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly size = input(inject(TUI_CHIP_OPTIONS).size);
}
