import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {tuiAvatarOptionsProvider} from '@taiga-ui/experimental/components/avatar';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';
import {tuiCheckboxOptionsProvider} from '@taiga-ui/experimental/components/checkbox';

import {TuiChipComponent} from './chip.component';
import {TUI_CHIP_OPTIONS, TuiChipOptions} from './chip.options';

@Directive({
    selector: 'tui-chip,[tuiChip]',
    providers: [
        tuiCheckboxOptionsProvider({size: 's'}),
        tuiAvatarOptionsProvider({size: 'xxs'}),
        tuiButtonOptionsProvider({
            size: 'xs',
            appearance: 'icon',
        }),
    ],
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-size]': 'size',
    },
})
export class TuiChipDirective {
    @Input()
    size = this.options.size;

    @Input()
    appearance = this.options.appearance;

    constructor(
        @Inject(TUI_CHIP_OPTIONS) private readonly options: TuiChipOptions,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiChipComponent);
    }
}
