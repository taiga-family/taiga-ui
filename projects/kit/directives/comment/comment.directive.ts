import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./comment.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-comment-styles',
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
