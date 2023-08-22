import {expect, test} from '@playwright/test';
import {pages as PUBLIC_PAGES} from 'projects/demo/src/modules/app/pages';

import {tuiGoto} from '../../utils';
import {tuiGetDemoPathsForE2E} from './get-demo-paths';
import {tuiIsFlakyExample} from './is-flaky-examples';

test.describe(`Demo`, () => {
    tuiGetDemoPathsForE2E(PUBLIC_PAGES).forEach(path => {
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
