import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiDemo, TuiList],
    templateUrl: './index.html',
    styleUrl: '../styles.less',
    changeDetection,
})
export default class Page {
    protected readonly mcpStandard = import('./snippets/mcp-standard.md');
    protected readonly mcpClaudeCode = import('./snippets/mcp-claude-code.md');
}
