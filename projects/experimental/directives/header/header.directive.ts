import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {type TuiSizeXXL, type TuiSizeXXS} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components';
import {tuiAvatarOptionsProvider, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

import {TuiHeaderStylesComponent} from './header.component';

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
    private readonly nothing = tuiWithStyles(TuiHeaderStylesComponent);

    @Input('tuiHeader')
    public size: TuiSizeXXL | TuiSizeXXS | '' = 's';
}
