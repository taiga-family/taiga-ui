import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import type {TuiSizeXXS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiCheckboxOptionsProvider} from '@taiga-ui/kit/components/checkbox';
import {tuiSwitchOptionsProvider} from '@taiga-ui/kit/components/switch';

import {TUI_CHIP_OPTIONS} from './chip.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./chip.style.less'],
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
        tuiAvatarOptionsProvider({size: 'xs'}),
        tuiButtonOptionsProvider({
            size: 'xs',
            appearance: 'icon',
        }),
    ],
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIcons,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    host: {'[attr.data-size]': 'size'},
})
export class TuiChip {
    private readonly options = inject(TUI_CHIP_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiChipStyles);

    @Input()
    public size: TuiSizeXXS = this.options.size;
}
