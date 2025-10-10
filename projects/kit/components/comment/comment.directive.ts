import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    type TuiHorizontalDirection,
    type TuiVerticalDirection,
} from '@taiga-ui/core/types';

@Component({
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/comment.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-comment'},
})
class Styles {}

@Directive({
    selector: '[tuiComment]',
    host: {'[attr.data-direction]': 'direction()'},
})
export class TuiComment {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly direction = input<TuiHorizontalDirection | TuiVerticalDirection | ''>(
        'top',
        {alias: 'tuiComment'},
    );
}
