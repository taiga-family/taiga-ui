import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/comment.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-comment',
    },
})
class TuiCommentStyles {}

@Directive({
    standalone: true,
    selector: '[tuiComment]',
    host: {
        '[attr.data-direction]': 'tuiComment',
    },
})
export class TuiComment {
    protected readonly nothing = tuiWithStyles(TuiCommentStyles);

    @Input()
    public tuiComment: TuiHorizontalDirection | TuiVerticalDirection | '' = 'top';
}
