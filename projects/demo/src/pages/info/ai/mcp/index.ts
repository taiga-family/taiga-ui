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
    protected readonly mcpInitClaude = import('./snippets/mcp-init-claude.md');
    protected readonly mcpInitCursor = import('./snippets/mcp-init-cursor.md');
    protected readonly mcpInitVscode = import('./snippets/mcp-init-vscode.md');
    protected readonly mcpInitCodex = import('./snippets/mcp-init-codex.md');
    protected readonly mcpInitOpencode = import('./snippets/mcp-init-opencode.md');
    protected readonly mcpInitNext = import('./snippets/mcp-init-next.md');
    protected readonly mcpInitV4 = import('./snippets/mcp-init-v4.md');
    protected readonly mcpClaudeCode = import('./snippets/mcp-claude-code.md');
    protected readonly mcpClaudeCodeConfig =
        import('./snippets/mcp-claude-code-config.md');

    protected readonly mcpCursor = import('./snippets/mcp-cursor.md');
    protected readonly mcpWindsurf = import('./snippets/mcp-windsurf.md');
    protected readonly mcpVscode = import('./snippets/mcp-vscode.md');
    protected readonly mcpCodexCli = import('./snippets/mcp-codex-cli.md');
    protected readonly mcpCodex = import('./snippets/mcp-codex.md');
    protected readonly mcpOpencode = import('./snippets/mcp-opencode.md');
    protected readonly mcpStandard = import('./snippets/mcp-standard.md');
}
