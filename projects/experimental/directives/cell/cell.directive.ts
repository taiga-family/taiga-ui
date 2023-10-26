import {Directive, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiDirectiveStylesService, TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

import {TuiCellComponent} from './cell.component';

@Directive({
    selector: '[tuiCell]',
    host: {
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
