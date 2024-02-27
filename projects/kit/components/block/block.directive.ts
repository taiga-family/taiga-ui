import {ContentChild, Directive, HostBinding, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidatorDirective, tuiWithStyles} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import {TuiBlockComponent} from './block.component';
import {TUI_BLOCK_OPTIONS} from './block.options';

@Directive({
    standalone: true,
    selector: 'label[tuiBlock],input[tuiBlock]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
        tuiAvatarOptionsProvider({size: 's'}),
    ],
    host: {tuiBlock: ''},
    hostDirectives: [
        TuiNativeValidatorDirective,
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
    ],
})
export class TuiBlockDirective {
    @ContentChild(NgControl)
    private readonly control?: NgControl;

    private readonly options = inject(TUI_BLOCK_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiBlockComponent);

    @Input('tuiBlock')
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeXS | '' = this.options.size;

    @HostBinding('class._disabled')
    get disabled(): boolean {
        return !!this.control?.disabled;
    }
}
