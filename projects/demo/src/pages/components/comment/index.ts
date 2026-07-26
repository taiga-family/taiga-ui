import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiHorizontalDirection, type TuiVerticalDirection} from '@taiga-ui/core';
import {TuiComment} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiComment, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Customization'];

    protected readonly directions: ReadonlyArray<
        TuiHorizontalDirection | TuiVerticalDirection | ''
    > = ['', 'top', 'bottom', 'start', 'end'];

    protected direction: TuiHorizontalDirection | TuiVerticalDirection | '' = 'top';
}
