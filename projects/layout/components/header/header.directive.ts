import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {type TuiSizeL, type TuiSizeS, type TuiSizeXS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/kit/components/badge-notification';

export const [TUI_HEADER_OPTIONS, tuiHeaderOptionsProvider] = tuiCreateOptions<{
    size: '' | 'body-l' | 'body-m' | 'body-s' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>({size: 'h5'});

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './header.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-header-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiHeader]',
    providers: [
        tuiAvatarOptionsProvider({size: 'm'}),
        tuiBadgeNotificationOptionsProvider(() => ({
            size: toBadgeSize(inject(TuiHeader).tuiHeader()),
        })),
        tuiButtonOptionsProvider(() => ({
            size: toButtonSize(inject(TuiHeader).tuiHeader()),
        })),
    ],
    host: {
        tuiHeader: '',
        'data-tui-version': TUI_VERSION,
        '[attr.data-size]': 'tuiHeader() || options.size || "h5"',
    },
})
export class TuiHeader {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_HEADER_OPTIONS);

    public readonly tuiHeader = input(this.options.size);
}

function toButtonSize(size: string): TuiSizeL | TuiSizeXS {
    switch (size) {
        case 'h1':
            return 'l';
        case 'h2':
        case 'h3':
            return 'm';
        case 'h4':
            return 's';
        default:
            return 'xs';
    }
}

function toBadgeSize(size: string): TuiSizeS {
    switch (size) {
        case 'body-l':
        case 'body-m':
        case 'body-s':
        case 'h6':
            return 's';
        default:
            return 'm';
    }
}
