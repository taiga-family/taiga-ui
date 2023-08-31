import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {tuiIsFlakyExample} from './is-flaky-examples';

test.describe(`Demo`, () => {
    const demoPaths: string[] = JSON.parse(process.env[`DEMO_PATHS`]!);

    demoPaths.forEach(path => {
        test(path, async ({page}) => {
            await tuiGoto(page, path);

            await expect(async () => {
                const examples = await page.locator(`tui-doc-example`).all();

                expect(examples.length).toBeGreaterThan(0);

                for (const example of examples) {
                    await expect(
                        example.locator(`[automation-id="tui-doc-example"]`),
                    ).toBeAttached();
                }
            }).toPass();

            const examples = await page
                .locator(`tui-doc-example [automation-id="tui-doc-example"]`)
                .all();

            for (const [i, example] of examples.entries()) {
                if (tuiIsFlakyExample(path, i)) {
                    continue;
                }

                await expect(example).toHaveScreenshot([
                    path.replace(`/`, ``).replace(/\//g, `-`),
                    `${i + 1}.png`,
                ]);
            }
        });
    });
});
