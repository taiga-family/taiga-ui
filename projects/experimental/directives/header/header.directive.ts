import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {
    tuiAvatarOptionsProvider,
    tuiBadgeOptionsProvider,
    tuiButtonOptionsProvider,
} from '@taiga-ui/experimental/components';

import {TuiHeaderStylesComponent} from './header.component';

@Directive({
    selector: '[tuiHeader]',
    providers: [
        tuiAvatarOptionsProvider({size: 's'}),
        tuiButtonOptionsProvider({size: 's'}),
        tuiBadgeOptionsProvider({size: 'm'}),
    ],
    host: {
        tuiHeader: '',
        '[attr.data-size]': 'size || "s"',
    },
})
export class TuiHeaderDirective {
    @Input('tuiHeader')
    size: TuiSizeXXL | TuiSizeXXS | '' = 's';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiHeaderStylesComponent);
    }
}
