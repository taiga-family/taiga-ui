# Writing Migrations with an LLM

A guide for developers: how to effectively use an LLM to write Taiga UI schematics migrations.

## Migration priorities

Focus on what impacts users most — ask the LLM to follow this order:

1. **High**: `@Component({ imports: [...] })` + template inputs/outputs (directives, pipes, components)
2. **Medium**: `inject()` calls, constructor injection, `viewChild` references
3. **Low**: Internal/private API usage, edge cases, type-only imports

## Use existing utilities first

Before writing any custom code, the LLM must check whether an existing constant-driven utility covers the case
(`identifiers-to-replace`, `attrs-to-replace`, `modules-to-remove`, etc.). A custom `migrate-*.ts` is only justified
when no existing utility fits. Ask the LLM to explicitly state which utility it chose and why before writing code.

## Scenarios

| Scenario              | When                                                  | Approach                                                                                                                                                      |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Known change**   | You have a PR, changelog entry, or clear before/after | Ask the LLM to identify the right utility (constants file vs custom function) _before_ writing code. Verify it picks a constants file, not a custom function. |
| **2. Unknown change** | You know the entity name but not what changed         | Ask the LLM to compare the v{N-1} and v{N} public APIs first, then proceed as Scenario 1 (Known change).                                                      |
| **3. Batch**          | A list of changes to cover at once                    | Ask the LLM to plan the full list first (utility + target file per item). Then implement **one by one**, running tests after each.                            |
| **4. Review**         | The LLM already wrote a migration                     | Ask it to re-check the decision tree and verify filters, edge cases, and test coverage.                                                                       |

## Tests are mandatory

Every migration must have a test. No exceptions. Ask the LLM to write the test alongside the migration, not after. The
test must cover:

- The happy path (entity is present and gets migrated)
- Edge cases (`[attr]="false"`, static vs dynamic binding)
- A case where the migration should **not** apply (to verify `filterFn` logic)

Run with snapshot update and verify the snapshots manually:

```bash
npx jest schematic-migrate-{name} --updateSnapshot
```

## Common LLM mistakes

| Mistake                                                                          | What to do                                                                                     |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Creates a custom `migrate-*.ts` for a simple rename/remove                       | Ask it to re-read the decision tree and use the appropriate constants file                     |
| Writes many migrations at once — quality degrades on edge cases and filter logic | Work one migration at a time; run tests after each before moving to the next                   |
| Skips writing tests                                                              | Remind that tests are mandatory; ask it to write the test before marking the migration as done |
