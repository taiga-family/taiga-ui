import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core';

import {TuiCommentComponent} from './comment.component';

@Directive({
    standalone: true,
    selector: '[tuiComment]',
    host: {
        '[attr.data-direction]': 'tuiComment',
    },
})
export class TuiCommentDirective {
    @Input()
    public tuiComment: TuiHorizontalDirection | TuiVerticalDirection | '' = 'top';

    protected readonly nothing = tuiWithStyles(TuiCommentComponent);
}
