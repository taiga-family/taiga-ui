import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

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
export class TuiHeaderDirective {
    protected readonly nothing = tuiWithStyles(TuiHeaderStyles);

    @Input('tuiHeader')
    public size: TuiSizeXXL | TuiSizeXXS | '' = 's';
}
