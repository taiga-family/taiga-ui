import"./chunk-LQ6M4NCU.js";var o=`<tui-doc-page header="MCP server">
    <ng-template pageTab>
        <p class="description">
            The
            <a
                href="https://www.npmjs.com/package/@taiga-ui/mcp"
                target="_blank"
                tuiLink
            >
                <code>&#64;taiga-ui/mcp</code>
            </a>
            Model Context Protocol (MCP)
            <a
                href="https://github.com/taiga-family/taiga-ui-mcp"
                target="_blank"
                tuiLink
            >
                server
            </a>
            gives AI assistants structured, on-demand access to Taiga UI \u2014 full documentation plus ready-made Angular
            examples, served from the live source, with no local Angular project required. It is the fastest way to keep
            an agent aligned with the version you actually have installed.
        </p>

        <tui-doc-example
            heading="Installation"
            [fullsize]="true"
            [preview]="false"
        >
            <p class="description">
                The quickest way is the same for every agent \u2014 run it with no flags and pick your agents (you can select
                several) and the docs version interactively:
            </p>
            <tui-doc-code
                class="tui-space_top-4"
                [code]="mcpInitInteractive"
            />

            <p class="description tui-space_top-4">Prefer to wire it up yourself? Pick your agent:</p>
            <tui-tabs [(activeItemIndex)]="activeItemIndex">
                <button
                    tuiTab
                    type="button"
                >
                    Claude Code
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Cursor
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    VS Code
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Codex
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    OpenCode
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Windsurf
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Other
                </button>
            </tui-tabs>

            @if (versionClient()) {
                <p class="description">Scaffold it with one command:</p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpInit()"
                />

                <p class="description tui-space_top-4">
                    Want a specific docs version? Add
                    <code>--version</code>
                    to the
                    <code>init</code>
                    command:
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpInitV4()"
                />
            }

            @if (activeItemIndex() === 0) {
                <p class="description">Or add it with the Claude CLI:</p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpClaudeCode"
                />

                <p class="description">
                    Or add the server to
                    <code>~/.claude/settings.json</code>
                    :
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpClaudeCodeConfig"
                />
            } @else if (activeItemIndex() === 1) {
                <p class="description">
                    Or add to
                    <code>~/.cursor/mcp.json</code>
                    (or
                    <code>.cursor/mcp.json</code>
                    for a project):
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpCursor"
                />
            } @else if (activeItemIndex() === 2) {
                <p class="description">
                    Or add to
                    <code>.vscode/mcp.json</code>
                    :
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpVscode"
                />
            } @else if (activeItemIndex() === 3) {
                <p class="description">Or with the Codex CLI:</p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpCodexCli"
                />

                <p class="description">
                    Or add to
                    <code>~/.codex/config.toml</code>
                    :
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpCodex"
                />

                <div
                    appearance="info"
                    tuiNotification
                    class="tui-space_top-4"
                >
                    Codex loads a project
                    <code>.codex/config.toml</code>
                    only in a trusted workspace. Trust this folder in Codex, or add the server to
                    <code>~/.codex/config.toml</code>
                    instead.
                </div>
            } @else if (activeItemIndex() === 4) {
                <p class="description">
                    Or add to
                    <code>opencode.json</code>
                    (or
                    <code>~/.config/opencode/opencode.json</code>
                    ):
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpOpencode"
                />
            } @else if (activeItemIndex() === 5) {
                <p class="description">
                    Or add to
                    <code>~/.codeium/windsurf/mcp_config.json</code>
                    :
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpWindsurf"
                />
            } @else {
                <p class="description">
                    Add the
                    <code>mcpServers</code>
                    block to your client's config file:
                </p>
                <tui-doc-code
                    class="tui-space_top-4"
                    [code]="mcpStandard"
                />
            }

            <p class="description tui-space_top-4">
                Confirm the client picked it up: most CLIs list configured servers (for example
                <code>claude mcp list</code>
                ), and many show live status with
                <code>/mcp</code>
                inside a session.
            </p>
        </tui-doc-example>

        <tui-doc-example
            heading="Available tools"
            [fullsize]="true"
            [preview]="false"
        >
            <ul tuiList>
                <li>
                    <strong>
                        <a
                            href="https://github.com/taiga-family/taiga-ui-mcp/tree/main/src/tools/get-overview.ts"
                            rel="noreferrer"
                            target="_blank"
                            tuiLink
                        >
                            <code>get_overview</code>
                        </a>
                    </strong>
                    \u2014 call this first: the structured documentation header as JSON, with the import map, code-generation
                    checklist, CDK types, common mistakes, and getting-started guides.
                </li>

                <li>
                    <strong>
                        <a
                            href="https://github.com/taiga-family/taiga-ui-mcp/tree/main/src/tools/get-list-components.ts"
                            rel="noreferrer"
                            target="_blank"
                            tuiLink
                        >
                            <code>get_list_components</code>
                        </a>
                    </strong>
                    \u2014 list all documentation section IDs (with optional fuzzy filtering) plus basic metadata (category,
                    package, type).
                </li>

                <li>
                    <strong>
                        <a
                            href="https://github.com/taiga-family/taiga-ui-mcp/tree/main/src/tools/get-component-example.ts"
                            rel="noreferrer"
                            target="_blank"
                            tuiLink
                        >
                            <code>get_component_example</code>
                        </a>
                    </strong>
                    \u2014 return the full documentation and code snippets for the requested section names.
                </li>

                <li>
                    <strong>
                        <a
                            href="https://github.com/taiga-family/taiga-ui-mcp/tree/main/src/tools/get-migration-guide.ts"
                            rel="noreferrer"
                            target="_blank"
                            tuiLink
                        >
                            <code>get_migration_guide</code>
                        </a>
                    </strong>
                    \u2014 return the complete migration guide for version updates: checklist, schematics steps, snippets,
                    and troubleshooting.
                </li>
            </ul>
        </tui-doc-example>

        <tui-doc-example
            heading="What you can ask"
            [fullsize]="true"
            [preview]="false"
        >
            <p class="description">
                Talk to your assistant in plain language \u2014 it picks the right tool and reads the live docs for you:
            </p>
            <ul tuiList>
                <li>
                    "How do I use
                    <code>tui-input</code>
                    with reactive forms?" \u2014 returns the current example and API.
                </li>
                <li>
                    "Show me a
                    <code>tui-table</code>
                    example with sorting and pagination." \u2014 returns a ready Angular snippet.
                </li>
                <li>
                    "Which components does
                    <code>&#64;taiga-ui/kit</code>
                    include?" \u2014 enumerates what's available.
                </li>
                <li>"What changed migrating from v4 to v5?" \u2014 reads the migration guide.</li>
            </ul>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{o as default};
