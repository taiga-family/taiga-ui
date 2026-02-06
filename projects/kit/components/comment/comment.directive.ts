import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    type TuiHorizontalDirection,
    type TuiVerticalDirection,
} from '@taiga-ui/core/types';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/comment.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-comment'},
})
class Styles {}

@Directive({
    selector: '[tuiComment]',
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.data-direction]': 'direction()',
    },
})
export class TuiComment {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly direction = input<TuiHorizontalDirection | TuiVerticalDirection | ''>(
        'top',
        {alias: 'tuiComment'},
    );
}
