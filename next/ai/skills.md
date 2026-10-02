# Skills

A skill teaches an AI assistant a durable
_method_
for working with Taiga UI — the workflow to follow and the checks to run — that it triggers automatically
based on what you ask, no special command needed. Ours live in
[taiga-family/skills](https://github.com/taiga-family/skills)
. A skill guides the assistant; it does not replace your review — the agent still verifies exact,
version-specific APIs against a live source, and you approve the changes it proposes.

## Example prompts

Ask in plain language — the relevant skill triggers on context:

- "Migrate this project from Taiga UI v4 to v5 and fix the leftover migration TODOs."

- "Update Taiga UI to the latest major and clear the deprecation warnings."

- "Resolve the
`@taiga-ui/legacy`
imports left after
`ng update`
."

## Available skills

- **`tui-migration`**
— safely resolve the schematics migration TODOs left after
`ng update`
/
`nx migrate`
, clean up migration notes, and clear deprecation warnings without changing runtime behavior.

**`tui-developer` is on the way**
— a skill for building apps with Taiga UI (setup, components, forms, dialogs, theming) is currently in
the works and not part of the install yet.

## Install

Skills install with
[`npx skills`](https://github.com/vercel-labs/skills)
— no setup required. Install a specific skill:

```bash
npx skills add taiga-family/skills --skill tui-migration
```

…or install everything at once:

```bash
npx skills add taiga-family/skills --all
```

## How it works

Each skill is a Markdown
`SKILL.md`
file with a short description of when to use it. Installing drops it into your agent's skills directory,
and from then on the agent loads it automatically whenever your request matches that description — there
is no flag or slash command to remember.

A skill carries the durable part — the workflow, the guardrails, the mistakes to avoid — and
deliberately leaves exact component names, imports, and per-version APIs to an always-fresh source, the
MCP server
or
`llms-full.txt`
, because Taiga UI evolves quickly. That keeps the method stable while the facts stay current.

## Learn more

[taiga-family/skills Source and the full skill definitions.](https://github.com/taiga-family/skills)

MCP server Live, on-demand Taiga UI docs and examples.

llms.txt Always-fresh context files to paste or point tools at.
