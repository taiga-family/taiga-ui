import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCommentDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-comment-example-1',
    imports: [TuiCommentDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCommentExample1 {}
