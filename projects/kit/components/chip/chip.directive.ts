import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {type TuiSizeXXS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiCheckboxOptionsProvider} from '@taiga-ui/kit/components/checkbox';
import {tuiSwitchOptionsProvider} from '@taiga-ui/kit/components/switch';

import {TUI_CHIP_OPTIONS} from './chip.options';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/chip.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-chip',
    },
})
class TuiChipStyles {}

@Directive({
    standalone: true,
    selector: 'tui-chip,[tuiChip]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS),
        tuiSwitchOptionsProvider({size: 's'}),
        tuiCheckboxOptionsProvider({size: 's'}),
        tuiAvatarOptionsProvider(() => ({
            size: 'xs',
            round: inject(TUI_PLATFORM) !== 'web',
        })),
        tuiButtonOptionsProvider({
            size: 'xs',
            appearance: 'icon',
        }),
    ],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {'[attr.data-size]': 'size'},
})
export class TuiChip {
    private readonly options = inject(TUI_CHIP_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiChipStyles);

    @Input()
    public size: TuiSizeXXS = this.options.size;
}
