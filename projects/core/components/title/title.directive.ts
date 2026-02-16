import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/title.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-title'},
})
class Styles {}

@Directive({
    selector: '[tuiTitle]',
    host: {
        tuiTitle: '',
        'data-tui-version': TUI_VERSION,
        '[attr.data-size]': 'tuiTitle() || null',
    },
})
export class TuiTitle {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiTitle = input<TuiSizeL | TuiSizeS | ''>('');
}
