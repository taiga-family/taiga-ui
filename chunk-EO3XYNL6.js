import"./chunk-LQ6M4NCU.js";var o=`import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotification} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiList} from '@taiga-ui/layout';

const INIT_CLIENTS = [
    'claude',
    'cursor',
    'vscode',
    'codex',
    'opencode',
    'windsurf',
] as const;

@Component({
    imports: [TuiDemo, TuiList, TuiNotification, TuiTabs],
    templateUrl: './index.html',
    styleUrl: '../styles.less',
    changeDetection,
})
export default class Page {
    protected readonly activeItemIndex = signal(0);
    protected readonly versionClient = computed(
        () => INIT_CLIENTS[this.activeItemIndex()] ?? null,
    );

    protected readonly mcpInit = import('./snippets/mcp-init.md');
    protected readonly mcpInitV4 = import('./snippets/mcp-init-v4.md');
    protected readonly mcpInitInteractive = import('./snippets/mcp-init-interactive.md');
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
`;export{o as default};
