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
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
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
        '[attr.data-size]': 'size || "l"',
        '[class._disabled]': '!!this.control?.disabled',
    },
})
export class TuiBlock {
    @ContentChild(NgControl)
    protected readonly control?: NgControl;

    protected readonly nothing = tuiWithStyles(TuiBlockStyles);

    @Input('tuiBlock')
    public size: TuiSizeL | TuiSizeS | '' = inject(TUI_BLOCK_OPTIONS).size;
}
