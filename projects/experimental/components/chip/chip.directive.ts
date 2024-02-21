import {Directive, inject, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiIconsDirective,
    TuiSizeXXS,
} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/experimental/components/avatar';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';
import {tuiCheckboxOptionsProvider} from '@taiga-ui/experimental/components/checkbox';
import {tuiToggleOptionsProvider} from '@taiga-ui/experimental/components/toggle';

import {TuiChipComponent} from './chip.component';
import {TUI_CHIP_OPTIONS} from './chip.options';

@Directive({
    selector: 'tui-chip,[tuiChip]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS),
        tuiToggleOptionsProvider({size: 's'}),
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
    protected readonly nothing = tuiWithStyles(TuiChipComponent);

    @Input()
    size: TuiSizeXXS = this.options.size;
}
