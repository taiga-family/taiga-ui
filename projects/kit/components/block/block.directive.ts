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
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import {TUI_BLOCK_OPTIONS} from './block.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/block.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-block'},
})
class Styles {}

@Directive({
    selector: 'label[tuiBlock],input[tuiBlock]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
        tuiAvatarOptionsProvider({size: 's'}),
    ],
    hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
    host: {
        tuiBlock: '',
        '[attr.data-size]': 'size() || this.options.size || "l"',
        '[class._disabled]': '!!this.control()?.disabled',
    },
})
export class TuiBlock {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_BLOCK_OPTIONS);
    protected readonly control = contentChild(NgControl);

    public readonly size = input(this.options.size, {alias: 'tuiBlock'});
}
