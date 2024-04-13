import {Component} from '@angular/core';
import {TuiCommentDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-comment-example-1',
    imports: [TuiCommentDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCommentExample1 {}
