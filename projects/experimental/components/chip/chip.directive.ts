import {Directive, inject, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeXXS} from '@taiga-ui/core';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';
import {
    tuiAvatarOptionsProvider,
    tuiCheckboxOptionsProvider,
    tuiSwitchOptionsProvider,
} from '@taiga-ui/kit';

import {TuiChipComponent} from './chip.component';
import {TUI_CHIP_OPTIONS} from './chip.options';

@Directive({
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
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    host: {'[attr.data-size]': 'size'},
})
export class TuiChipDirective {
    private readonly options = inject(TUI_CHIP_OPTIONS);

    @Input()
    public size: TuiSizeXXS = this.options.size;

    protected readonly nothing = tuiWithStyles(TuiChipComponent);
}
