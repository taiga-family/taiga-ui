import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCommentDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-comment-example-2',
    imports: [TuiCommentDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCommentExample2 {}
