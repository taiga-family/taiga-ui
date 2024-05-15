import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeXXS} from '@taiga-ui/core';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    tuiButtonOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';
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

    protected readonly nothing = tuiWithStyles(TuiChipStyles);
}
