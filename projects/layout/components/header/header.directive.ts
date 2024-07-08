import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./header.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-header',
    },
})
class TuiHeaderStyles {}

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
export class TuiHeader {
    protected readonly nothing = tuiWithStyles(TuiHeaderStyles);

    @Input('tuiHeader')
    public size: TuiSizeXXL | TuiSizeXXS | '' = 's';
}
