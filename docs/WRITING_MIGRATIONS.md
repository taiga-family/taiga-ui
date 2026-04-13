# Writing Migrations with an LLM

A guide for developers: how to effectively use an LLM to write Taiga UI schematics migrations.

## Before you start

1. Load the `write-migration` skill from
   [`.claude/skills/write-migration/SKILL.md`](../.claude/skills/write-migration/SKILL.md) into your LLM tool. Most
   modern agents (Claude Code, GitHub Copilot, etc.) pick it up automatically from the repo. In other tools, paste the
   skill contents into the prompt explicitly.

2. Give the LLM access to the previous major version source — it does not know what changed on its own. Options are
   described in the "Where to find the previous major version's source" section of the skill.

## Scenarios

---

### Scenario A: Known change (before/after)

The most common case — there is a PR, changelog, or task with a clear description of what changed.

**Step 1 — analysis (no code):**

```text
The following changed in Taiga UI v{N}: {describe before/after}.

Using the decision tree from Step 3 in MIGRATION_GUIDE.md:
1. Walk the tree and show which branch you chose and why.
2. Look at existing entries in the target file and use the same format.

Do NOT create a new migrate-*.ts file if the task is covered by an entry in a constants file.

Reply in this format:
- Change type: ...
- Chosen mechanism: ...
- Target file: ...
- Proposed entry: ...

Do not write code yet, analysis only.
```

> **Example of a good LLM response:**
>
> - Change type: conditional attribute removal
> - Chosen mechanism: `attrs-to-replace` (branch "Just rename the attribute?" — renaming to empty string = removal)
> - Target file: `vN/steps/constants/attrs-to-replace.ts`
> - Proposed entry: `{from: {attrName: 'new', withAttrsNames: ['tuiOption']}, to: {attrName: ''}}`

Wait for the response and verify that the chosen mechanism is constant-driven (an entry in a constants file), not a new
`migrate-*.ts` file. If the LLM suggests a custom function for a simple case, ask it to re-walk the decision tree.

**Step 2 — implementation:**

```text
Implement the migration using the chosen mechanism.
Look at existing entries in the target file and follow the same format.
```

---

### Scenario B: Known entity, unknown API change

For example: "we know `TuiInputPhone` changed somehow in v5, need to figure out how".

**Step 1 — research:**

```text
I need to write a migration for `{EntityName}` in Taiga UI v{N}.
Using MIGRATION_GUIDE.md (section "Where to find the previous major version's source"),
find what exactly changed: the public API in the previous major version vs the current one.

Reply in this format:
- Before (v{N-1}): ...
- After (v{N}): ...
- What needs to be migrated: ...

Do not write code yet.
```

After the response, continue with Scenario A.

---

### Scenario C: Batch — a list of changes to cover with migrations

For example: reviewing a long changelog after a release and need to quickly cover multiple items.

**Step 1 — plan the whole list:**

```text
Here is a list of changes in Taiga UI v{N}:
{list}

Using the decision tree from Step 3 in MIGRATION_GUIDE.md, for each item determine:
1. Does it need an automatic migration?
2. Which mechanism fits? (walk the decision tree and show the chosen branch)
3. Which file should the entry be added to?

Do NOT create new migrate-*.ts files if the task is covered by an entry in a constants file.
Do not write code — plan only.
```

**Step 2** — implement one by one, using the prompt from Scenario A for each. Run tests after each item, not at the end.

---

### Scenario D: Reviewing an existing migration

The LLM wrote a migration — need to verify correctness.

```text
Review the written migration using the decision tree from Step 3 in MIGRATION_GUIDE.md:
1. Walk the decision tree — could an existing mechanism have been used instead of a custom function?
2. Are the filters correct (withTagNames, withAttrsNames, filterFn)?
3. Are edge cases covered in the tests (reversed attribute order, negative case)?
If you find issues — fix them.
```

---

## Tests

After implementing any migration, ask the LLM to write tests:

```text
Write test cases following the pattern from Step 4 in MIGRATION_GUIDE.md.
Look at existing tests in the tests/ directory and follow the same format.
Include: the happy path, edge cases (reversed attribute order, different tag names),
and a negative case — where the migration should NOT fire.
```

Run tests with snapshot update and verify the result manually:

```bash
npx nx test cdk -- --testPathPattern="schematic-migrate-{name}" --updateSnapshot
```

## Common LLM mistakes

| Mistake                                                    | What to do                                                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Creates a custom `migrate-*.ts` for a simple rename/remove | Ask it to re-read the decision tree in MIGRATION_GUIDE.md Step 3 and use the appropriate constants file |
