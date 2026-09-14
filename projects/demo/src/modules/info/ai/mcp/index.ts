import {Component, computed, signal} from '@angular/core';
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
    standalone: true,
    imports: [TuiDemo, TuiList, TuiNotification, TuiTabs],
    templateUrl: './index.html',
    styleUrls: ['../styles.less'],
    changeDetection,
})
export default class Page {
    protected readonly activeItemIndex = signal(0);
    protected readonly versionClient = computed(
        () => INIT_CLIENTS[this.activeItemIndex()] ?? null,
    );

    protected readonly mcpInit = computed(() => this.initCommand());
    protected readonly mcpInitV4 = computed(() => this.initCommand('v4'));
    protected readonly mcpInitInteractive =
        import('./snippets/mcp-init-interactive.md?raw');

    protected readonly mcpClaudeCode = import('./snippets/mcp-claude-code.md?raw');
    protected readonly mcpClaudeCodeConfig =
        import('./snippets/mcp-claude-code-config.md?raw');

    protected readonly mcpCursor = import('./snippets/mcp-cursor.md?raw');
    protected readonly mcpWindsurf = import('./snippets/mcp-windsurf.md?raw');
    protected readonly mcpVscode = import('./snippets/mcp-vscode.md?raw');
    protected readonly mcpCodexCli = import('./snippets/mcp-codex-cli.md?raw');
    protected readonly mcpCodex = import('./snippets/mcp-codex.md?raw');
    protected readonly mcpOpencode = import('./snippets/mcp-opencode.md?raw');
    protected readonly mcpStandard = import('./snippets/mcp-standard.md?raw');

    private initCommand(version?: string): string {
        const client = this.versionClient() ?? '<client>';
        const flag = version ? ` --version ${version}` : '';

        return [
            '```bash',
            `npx @taiga-ui/mcp init --client ${client}${flag}`,
            '```',
        ].join('\n');
    }
}
