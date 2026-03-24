import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiSizeL} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-block-status',
    templateUrl: './block-status.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './block-status.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': TUI_VERSION,
        '[class._card]': 'card()',
        '[attr.data-size]': 'size()',
    },
})
export class TuiBlockStatusComponent {
    public readonly card = input(false);

    public readonly size = input<TuiSizeL>('l');
}
