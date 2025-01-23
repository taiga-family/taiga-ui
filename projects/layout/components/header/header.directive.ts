import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';

export const [TUI_HEADER_OPTIONS, tuiHeaderOptionsProvider] = tuiCreateOptions<{
    size:
        | TuiSizeXXL
        | TuiSizeXXS
        | 'body-l'
        | 'body-m'
        | 'body-xl'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6';
}>({
    size: 'h5',
});

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
        '[attr.data-size]': 'size || options.size',
    },
})
export class TuiHeader {
    protected readonly options = inject(TUI_HEADER_OPTIONS);
    protected readonly nothing = tuiWithStyles(TuiHeaderStyles);

    @Input('tuiHeader')
    public size:
        | TuiSizeXXL
        | TuiSizeXXS
        | ''
        | 'body-l'
        | 'body-m'
        | 'body-xl'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6' = this.options.size;
}
