import {tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {tuiIsFlakyExample} from './is-flaky-examples';

test.describe(`Demo`, () => {
    const demoPaths: string[] = JSON.parse(process.env[`DEMO_PATHS`]!);

    demoPaths.forEach(path => {
        test(path, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, path);

            await expect(async () => {
                const examples = await page.locator(`tui-doc-example`).all();

                expect(examples.length).toBeGreaterThan(0);

                await Promise.all(
                    examples.map(async example =>
                        expect(
                            example.locator(`[automation-id="tui-doc-example"]`),
                        ).toBeAttached(),
                    ),
                );
            }).toPass();

            const examples = await page
                .locator(`tui-doc-example [automation-id="tui-doc-example"]`)
                .all();

            await Promise.all(
                Array.from(examples.entries()).map(async ([i, example]) => {
                    if (tuiIsFlakyExample(path, i)) {
                        return;
                    }

                    await expect(example).toHaveScreenshot([
                        path.replace(`/`, ``).replace(/\//g, `-`),
                        `${i + 1}.png`,
                    ]);
                }),
            );
        });
    });
});
