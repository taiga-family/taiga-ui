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
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';
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
    hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
    host: {
        tuiBlock: '',
        '[attr.data-size]': 'size',
        '[class._disabled]': 'disabled',
    },
})
export class TuiBlock {
    @ContentChild(NgControl)
    private readonly control?: NgControl;

    private readonly options = inject(TUI_BLOCK_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiBlockStyles);

    @Input('tuiBlock')
    public size: TuiSizeL | TuiSizeXS | '' = this.options.size;

    protected get disabled(): boolean {
        return !!this.control?.disabled;
    }
}
