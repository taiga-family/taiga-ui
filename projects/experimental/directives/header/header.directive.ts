import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components';
import {tuiAvatarOptionsProvider, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

import {TuiHeaderComponent} from './header.component';

@Directive({
    standalone: true,
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
    // @ts-ignore
    private readonly nothing = tuiWithStyles(TuiHeaderComponent);

    @Input('tuiHeader')
    size: TuiSizeXXL | TuiSizeXXS | '' = 's';
}
