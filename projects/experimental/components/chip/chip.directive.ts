import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
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
import {TUI_CHIP_OPTIONS, TuiChipOptions} from './chip.options';

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
    @Input()
    size: TuiSizeXXS = this.options.size;

    constructor(
        @Inject(TUI_CHIP_OPTIONS) private readonly options: TuiChipOptions,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiChipComponent);
    }
}
