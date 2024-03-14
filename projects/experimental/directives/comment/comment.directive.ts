import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core';

import {TuiCommentComponent} from './comment.component';

@Directive({
    selector: '[tuiComment]',
    host: {
        '[attr.data-direction]': 'tuiComment',
    },
})
export class TuiCommentDirective {
    @Input()
    tuiComment: TuiHorizontalDirection | TuiVerticalDirection | '' = 'top';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiCommentComponent);
    }
}
