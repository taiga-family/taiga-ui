import {Directive, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiDirectiveStylesService, TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    tuiAvatarOptionsProvider,
    tuiButtonOptionsProvider,
} from '@taiga-ui/experimental/components';

import {TuiCellComponent} from './cell.component';

@Directive({
    selector: '[tuiCell]',
    providers: [
        tuiAvatarOptionsProvider({size: 's'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
    host: {
        tuiCell: '',
        '[attr.data-size]': 'platform !== "web" ? "l" : size || "l"',
        '[attr.data-platform]': 'platform',
    },
})
export class TuiCellDirective {
    @Input('tuiCell')
    size: TuiSizeL | TuiSizeS | '' = 'l';

    constructor(
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiCellComponent);
    }
}
