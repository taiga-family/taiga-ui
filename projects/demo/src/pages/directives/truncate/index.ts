import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTruncate} from '@taiga-ui/cdk';

@Component({
    imports: [TuiDemo, TuiTruncate],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected content = 'I am very very long text that gets truncated';
    protected lines = 1;
    protected padding = 16;
    protected fontSize = 16;
    protected wordBreakStyles = ['break-all', 'break-word', 'normal'];
    protected wordBreak = this.wordBreakStyles[0];
}
