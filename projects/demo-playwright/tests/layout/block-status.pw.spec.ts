import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

async function wrapInLoader(status: Locator): Promise<void> {
    await status.evaluate((element) => {
        const loader = element.closest('tui-doc-example')?.querySelector('tui-loader');

        if (!(loader instanceof HTMLElement)) {
            throw new Error('The documentation example must contain a loader');
        }

        const content = loader.querySelector('fieldset');

        if (!content) {
            throw new Error('The loader must contain a fieldset');
        }

        const container = document.createElement('div');

        container.setAttribute('automation-id', 'block-status-container');
        container.style.overflow = 'auto';
        loader.className = '';
        element.replaceWith(container);
        container.append(loader);
        content.replaceChildren(element);
    });
}

test.describe('BlockStatus', () => {
    for (const example of ['basic', 'with-actions']) {
        test(`keeps ${example} content visible inside a loader with a top margin`, async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.BlockStatus);

            const status = new TuiDocumentationPagePO(page)
                .getExample(`#${example}`)
                .locator('tui-block-status');

            await status.scrollIntoViewIfNeeded();
            await wrapInLoader(status);
            await status.evaluate((element) => {
                element.style.marginBlockStart = '64px';
            });

            const bounds = await status.evaluate((element) => {
                const container = element.parentElement!.getBoundingClientRect();

                return {
                    top: container.top,
                    bottom: container.bottom,
                    children: Array.from(element.children)
                        .map((child) => {
                            const {top, bottom, height} = child.getBoundingClientRect();

                            return {top, bottom, height};
                        })
                        .filter(({height}) => height > 0),
                };
            });

            for (const child of bounds.children) {
                expect(child.top).toBeGreaterThanOrEqual(bounds.top - 1);
                expect(child.bottom).toBeLessThanOrEqual(bounds.bottom + 1);
            }
        });
    }

    for (const margin of [0, 32]) {
        test(`fills a loader with a fixed height and a ${margin}px top margin`, async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.BlockStatus);

            const status = new TuiDocumentationPagePO(page)
                .getExample('#basic')
                .locator('tui-block-status');

            await status.scrollIntoViewIfNeeded();
            await wrapInLoader(status);
            await page.getByTestId('block-status-container').evaluate((container) => {
                container.style.blockSize = '400px';
                container.querySelector<HTMLElement>('tui-loader')!.style.blockSize =
                    '100%';
            });
            await status.evaluate((element, value) => {
                element.style.marginBlockStart = `${value}px`;
            }, margin);

            const bounds = await status.evaluate((element) => {
                const {height, top, bottom} = element.getBoundingClientRect();
                const image = element
                    .querySelector('.t-block-image')!
                    .getBoundingClientRect();

                const text = element
                    .querySelector('.t-block-text')!
                    .getBoundingClientRect();

                return {
                    height,
                    centerOffset: (image.top + text.bottom - top - bottom) / 2,
                };
            });

            expect(bounds.height).toBe(400 - margin);
            expect(bounds.centerOffset).toBeCloseTo(0, 0);
        });
    }
});
