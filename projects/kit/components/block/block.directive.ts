import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import {TUI_BLOCK_OPTIONS} from './block.options';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/block.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-block'},
})
class Styles {}

@Directive({
    selector: 'label[tuiBlock],input[tuiBlock]',
    providers: [
        provideStyles(Styles),
        tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
        tuiAvatarOptionsProvider({size: 's'}),
    ],
    hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons, TuiWithStyles],
    host: {
        tuiBlock: '',
        '[attr.data-size]': 'tuiBlock() || "l"',
        '[class._disabled]': '!!this.control()?.disabled',
    },
})
export class TuiBlock {
    protected readonly control = contentChild(NgControl);

    public readonly tuiBlock = input<TuiSizeL | TuiSizeS | ''>(
        inject(TUI_BLOCK_OPTIONS).size,
    );
}
