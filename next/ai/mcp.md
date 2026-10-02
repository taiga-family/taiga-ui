# MCP server

The
[`@taiga-ui/mcp`](https://www.npmjs.com/package/@taiga-ui/mcp)
Model Context Protocol (MCP)
[server](https://github.com/taiga-family/taiga-ui-mcp)
gives AI assistants structured, on-demand access to Taiga UI — full documentation plus ready-made Angular
examples, served from the live source, with no local Angular project required. It is the fastest way to keep
an agent aligned with the version you actually have installed.

## Installation

The quickest way is the same for every agent — run it with no flags and pick your agents (you can select
several) and the docs version interactively:

```bash
npx @taiga-ui/mcp init
```

Prefer to wire it up yourself? Pick your agent:

Scaffold it with one command:

```bash
npx @taiga-ui/mcp init --client <client>
```

Want a specific docs version? Add
`--version`
to the
`init`
command:

```bash
npx @taiga-ui/mcp init --client <client> --version v4
```

Or add it with the Claude CLI:

```bash
claude mcp add taiga-ui -- \
  npx -y @taiga-ui/mcp@latest --source-url=https://taiga-ui.dev/llms-full.txt
```

Or add the server to
`~/.claude/settings.json`
:

```json
{
  "mcpServers": {
    "taiga-ui": {
      "command": "npx",
      "args": ["-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"]
    }
  }
}
```

Or add to
`~/.cursor/mcp.json`
(or
`.cursor/mcp.json`
for a project):

```json
{
  "mcpServers": {
    "taiga-ui": {
      "command": "npx",
      "args": ["-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"]
    }
  }
}
```

Or add to
`.vscode/mcp.json`
:

```json
{
  "servers": {
    "taiga-ui": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"]
    }
  }
}
```

Or with the Codex CLI:

```bash
codex mcp add taiga-ui -- \
  npx -y @taiga-ui/mcp@latest --source-url=https://taiga-ui.dev/llms-full.txt
```

Or add to
`~/.codex/config.toml`
:

```toml
[mcp_servers.taiga-ui]
command = "npx"
args = ["-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"]
```

Codex loads a project
`.codex/config.toml`
only in a trusted workspace. Trust this folder in Codex, or add the server to
`~/.codex/config.toml`
instead.

Or add to
`opencode.json`
(or
`~/.config/opencode/opencode.json`
):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "taiga-ui": {
      "type": "local",
      "command": ["npx", "-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"],
      "enabled": true
    }
  }
}
```

Or add to
`~/.codeium/windsurf/mcp_config.json`
:

```json
{
  "mcpServers": {
    "taiga-ui": {
      "command": "npx",
      "args": ["-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"]
    }
  }
}
```

Add the
`mcpServers`
block to your client's config file:

```json
{
  "mcpServers": {
    "taiga-ui": {
      "command": "npx",
      "args": ["-y", "@taiga-ui/mcp@latest", "--source-url=https://taiga-ui.dev/llms-full.txt"]
    }
  }
}
```

Confirm the client picked it up: most CLIs list configured servers (for example
`claude mcp list`
), and many show live status with
`/mcp`
inside a session.

## Available tools

- **`get_overview`**
— call this first: the structured documentation header as JSON, with the import map, code-generation
checklist, CDK types, common mistakes, and getting-started guides.

- **`get_list_components`**
— list all documentation section IDs (with optional fuzzy filtering) plus basic metadata (category,
package, type).

- **`get_component_example`**
— return the full documentation and code snippets for the requested section names.

- **`get_migration_guide`**
— return the complete migration guide for version updates: checklist, schematics steps, snippets,
and troubleshooting.

## What you can ask

Talk to your assistant in plain language — it picks the right tool and reads the live docs for you:

- "How do I use
`tui-input`
with reactive forms?" — returns the current example and API.

- "Show me a
`tui-table`
example with sorting and pagination." — returns a ready Angular snippet.

- "Which components does
`@taiga-ui/kit`
include?" — enumerates what's available.

- "What changed migrating from v4 to v5?" — reads the migration guide.
