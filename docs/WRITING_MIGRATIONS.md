# Writing Migrations

## Priorities

Focus on what impacts users most:

1. **High**: `@Component({ imports: [...] })` + template inputs/outputs (directives, pipes, components)
2. **Medium**: `inject()` calls, constructor injection, `viewChild` references
3. **Low**: Internal/private API usage, edge cases, type-only imports

## Use existing utilities first

Before writing any custom code, check whether an existing constant-driven utility covers the case
(`identifiers-to-replace`, `attrs-to-replace`, `modules-to-remove`, etc.). A custom `migrate-*.ts` is only justified
when no existing utility fits.

## Tests are mandatory

Every migration must have a test. Write it alongside the migration, not after. Cover:

- The happy path (entity is present and gets migrated)
- Edge cases (`[attr]="false"`, static vs dynamic binding)
- A case where the migration should **not** apply (to verify `filterFn` logic)

```bash
npx jest schematic-migrate-{name} --updateSnapshot
```
