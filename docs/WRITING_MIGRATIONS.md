# Writing Migrations with an LLM

A guide for developers: how to effectively use an LLM to write Taiga UI schematics migrations.

## Before you start

The skill is at [`.claude/skills/write-migration/SKILL.md`](../.claude/skills/write-migration/SKILL.md). In Claude Code,
invoke it with `/write-migration {EntityName}`. In other LLM tools, paste the skill contents into the prompt.

Make sure the LLM has access to the previous major version source — see the "Where to find the previous major version's
source" section of the skill.

## Scenarios

| Scenario              | When                                                  | Approach                                                                                                                                                               |
| --------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Known change**   | You have a PR, changelog entry, or clear before/after | Ask the LLM to walk the decision tree (Step 3 in the skill) and identify the mechanism _before_ writing code. Verify it picks a constants file, not a custom function. |
| **2. Unknown change** | You know the entity name but not what changed         | Ask the LLM to compare the v{N-1} and v{N} public APIs first, then proceed as Scenario 1 (Known change).                                                               |
| **3. Batch**          | A list of changes to cover at once                    | Ask the LLM to plan the full list first (mechanism + target file per item). Then implement **one by one**, running tests after each.                                   |
| **4. Review**         | The LLM already wrote a migration                     | Ask it to re-walk the decision tree and check filters, edge cases, and test coverage.                                                                                  |

## Tests

After each migration, run with snapshot update and verify manually:

```bash
npx jest schematic-migrate-{name} --updateSnapshot
```

## Common LLM mistakes

| Mistake                                                                          | What to do                                                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Creates a custom `migrate-*.ts` for a simple rename/remove                       | Ask it to re-read the decision tree (Step 3 in the skill) and use the appropriate constants file |
| Writes many migrations at once — quality degrades on edge cases and filter logic | Work one migration at a time; run tests after each before moving to the next                     |
