import {expect, test} from '@playwright/test';

test.describe('SSG', () => {
    test('has prerendered components by Angular Universal', async ({page}) => {
        const response = await page.goto('/');
        const body = (await response?.text()) ?? '';
        const prerendered = await page.evaluate(
            body =>
                new DOMParser()
                    .parseFromString(body, 'text/html')
                    .body.querySelector('app')?.children.length ?? 0,
            body,
        );

        if (process.env.CI) {
            expect(prerendered).toBeGreaterThan(0);
        }
    });
});
