import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Loader', () => {
    test('keeps overflowing content and the spinner within a fixed height', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.Loader);

        const loader = new TuiDocumentationPagePO(page)
            .getExample('#with-inherited-background-color')
            .locator('tui-loader');

        await loader.evaluate((element) => {
            element.style.inlineSize = '240px';
            element.style.blockSize = '100px';
        });

        const bounds = await loader.evaluate((element) => {
            const content = element.querySelector('fieldset')!;
            const spinner = element.querySelector('.t-loader')!;

            return {
                height: element.getBoundingClientRect().height,
                content: content.getBoundingClientRect().height,
                spinner: spinner.getBoundingClientRect().height,
                scrollHeight: content.scrollHeight,
            };
        });

        expect(bounds.height).toBe(100);
        expect(bounds.scrollHeight).toBeGreaterThan(bounds.height);
        expect(bounds.content).toBe(bounds.height);
        expect(bounds.spinner).toBe(bounds.height);
    });

    for (const [initialWidth, width] of [
        [800, 240],
        [240, 800],
    ] as const) {
        test(`resizes with its content from ${initialWidth}px to ${width}px`, async ({
            page,
        }) => {
            await page.setViewportSize({width: initialWidth, height: 900});
            await tuiGoto(page, DemoRoute.Loader);

            const example = new TuiDocumentationPagePO(page)
                .getExample('#with-inherited-background-color')
                .locator('tui-loader');

            const fixture = await example.evaluate((original) => {
                const element = original.cloneNode(true) as HTMLElement;
                const content = element.querySelector('fieldset')!;
                const text = document.createElement('div');
                const styles = Array.from(document.querySelectorAll('style')).find(
                    (style) => style.textContent?.includes('tuiLoaderRotate'),
                )?.textContent;

                if (!styles) {
                    throw new Error('The loader styles must be loaded');
                }

                text.append(...Array.from(content.childNodes));
                content.replaceChildren(text);
                element.classList.remove('_loading');
                element.querySelector('.t-loader')?.remove();
                element.setAttribute('automation-id', 'resizable-loader');

                // An explicit viewport width masks WebKit bug 326939.
                return `<style>body {margin: 0; font: 16px/24px Arial} ${styles}</style>${element.outerHTML}`;
            });

            await page.setContent(fixture);

            const loader = page.getByTestId('resizable-loader');
            const heightDifference = async (): Promise<number> =>
                loader.evaluate((element) => {
                    const content = element.querySelector('fieldset > div')!;

                    return Math.abs(
                        element.getBoundingClientRect().height -
                            content.getBoundingClientRect().height,
                    );
                });

            await expect(loader).toHaveCSS('display', 'grid');
            await expect.poll(heightDifference).toBeLessThanOrEqual(1);
            await page.setViewportSize({width, height: 900});
            await expect.poll(heightDifference).toBeLessThanOrEqual(1);
        });
    }
});
