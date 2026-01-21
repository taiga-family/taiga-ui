# Demo Playwright tests

## Screenshot naming

Playwright can generate screenshot names automatically based on the test title and an index. That means you can omit the
name parameter and rely on auto-incremented names when you take multiple screenshots inside the same test:

```ts
await expect.soft(example1).toHaveScreenshot();
await expect.soft(example2).toHaveScreenshot();
```

The snapshot path is still controlled by the `snapshotPathTemplate` in `projects/demo-playwright/playwright.config.ts`.
