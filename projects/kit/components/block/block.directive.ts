import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidatorDirective, tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiAppearanceDirective, tuiAppearanceOptionsProvider} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import {TUI_BLOCK_OPTIONS} from './block.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./block.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-block',
    },
})
class TuiBlockStyles {}

@Directive({
    standalone: true,
    selector: 'label[tuiBlock],input[tuiBlock]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
        tuiAvatarOptionsProvider({size: 's'}),
    ],
    host: {
        tuiBlock: '',
        '[attr.data-size]': 'size',
        '[class._disabled]': 'disabled',
    },
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

    @Input('tuiBlock')
    public size: TuiSizeL | TuiSizeXS | '' = this.options.size;

    protected readonly nothing = tuiWithStyles(TuiBlockStyles);

    protected get disabled(): boolean {
        return !!this.control?.disabled;
    }
}
