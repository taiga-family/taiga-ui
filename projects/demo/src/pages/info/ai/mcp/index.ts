import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiDemo, TuiList, TuiTabs],
    templateUrl: './index.html',
    styleUrl: '../styles.less',
    changeDetection,
})
export default class Page {
    protected activeItemIndex = 0;
    protected readonly mcpClaudeCode = import('./snippets/mcp-claude-code.md');
    protected readonly mcpClaudeCodeConfig =
        import('./snippets/mcp-claude-code-config.md');

    protected readonly mcpCursor = import('./snippets/mcp-cursor.md');
    protected readonly mcpWindsurf = import('./snippets/mcp-windsurf.md');
    protected readonly mcpVscode = import('./snippets/mcp-vscode.md');
    protected readonly mcpStandard = import('./snippets/mcp-standard.md');
}
