import {Directive, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiDirectiveStylesService, TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

import {TuiTitleComponent} from './title.component';

@Directive({
    selector: '[tuiTitle]',
    host: {
        tuiTitle: '',
        '[attr.data-size]': 'size || null',
        '[attr.data-platform]': 'platform',
    },
})
export class TuiTitleDirective {
    @Input('tuiTitle')
    size: TuiSizeL | TuiSizeS | '' = '';

    constructor(
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiTitleComponent);
    }
}
