import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLineClampComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLineClampComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected linesLimit = 1;
    protected lineHeight = 24;
    protected maxWidth = 100;
    protected content = '';
}
