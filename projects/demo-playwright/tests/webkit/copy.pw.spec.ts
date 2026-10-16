import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Copy in WebKit', () => {
    test.use({hasTouch: false});

    test('keeps every wrapped line visible on hover and keyboard focus', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.Copy);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');
        const copy = example.locator('tui-copy').nth(1);
        const content = copy.locator('.t-content');
        const button = copy.locator('button');

        await copy.evaluate((node) => {
            node.parentElement!.style.inlineSize = '12rem';
        });
        await copy.scrollIntoViewIfNeeded();

        await expect(content).toHaveCSS('will-change', 'opacity');

        const assertVisibleLines = async (state: string): Promise<void> => {
            const geometry = await content.evaluate((node) => {
                const range = document.createRange();

                range.selectNodeContents(node);

                return {
                    width: window.innerWidth,
                    lines: Array.from(range.getClientRects(), (rect) => ({
                        left: rect.left,
                        top: rect.top,
                        width: rect.width,
                        height: rect.height,
                    })).filter(({width, height}) => width > 0 && height > 0),
                };
            });

            expect(geometry.lines.length).toBeGreaterThan(1);

            const screenshot = await page.screenshot({animations: 'disabled'});

            await test.info().attach(`copy-${state}`, {
                body: screenshot,
                contentType: 'image/png',
            });

            const deviations = await page.evaluate(
                async ({imageBase64, width, lines}) => {
                    const image = new Image();

                    image.src = `data:image/png;base64,${imageBase64}`;
                    await image.decode();

                    const canvas = document.createElement('canvas');

                    canvas.width = image.naturalWidth;
                    canvas.height = image.naturalHeight;

                    const context = canvas.getContext('2d');

                    if (!context) {
                        throw new Error('Unable to read screenshot pixels');
                    }

                    context.drawImage(image, 0, 0);

                    const {data} = context.getImageData(
                        0,
                        0,
                        canvas.width,
                        canvas.height,
                    );

                    const scale = canvas.width / width;

                    return lines.map(({left, top, width, height}) => {
                        const x0 = Math.max(0, Math.floor(left * scale));
                        const x1 = Math.min(
                            canvas.width,
                            Math.ceil((left + width) * scale),
                        );

                        const y0 = Math.max(0, Math.floor(top * scale));
                        const y1 = Math.min(
                            canvas.height,
                            Math.ceil((top + height) * scale),
                        );

                        let sum = 0;
                        let sumSquares = 0;
                        let pixels = 0;

                        for (let y = y0; y < y1; y++) {
                            for (let x = x0; x < x1; x++) {
                                const offset = (y * canvas.width + x) * 4;
                                const grayscale =
                                    (data[offset]! +
                                        data[offset + 1]! +
                                        data[offset + 2]!) /
                                    3;

                                sum += grayscale;
                                sumSquares += grayscale * grayscale;
                                pixels++;
                            }
                        }

                        const average = sum / pixels;

                        return Math.sqrt(
                            Math.max(0, sumSquares / pixels - average * average),
                        );
                    });
                },
                {imageBase64: screenshot.toString('base64'), ...geometry},
            );

            for (const [index, deviation] of deviations.entries()) {
                expect(
                    deviation,
                    `Wrapped line ${index + 1} is not visible in ${state}`,
                ).toBeGreaterThan(2);
            }
        };

        await assertVisibleLines('default');

        await copy.hover();
        await expect(button).toHaveCSS('opacity', '1');
        await assertVisibleLines('hover');

        await page.mouse.move(0, 0);
        await page.keyboard.press('Tab');
        await button.focus();

        await expect(button).toBeFocused();
        await expect(button).toHaveCSS('opacity', '1');
        await assertVisibleLines('focus');
    });

    test('preserves ellipsis for long inline content', async ({page}) => {
        await tuiGoto(page, DemoRoute.Copy);

        const content = new TuiDocumentationPagePO(page)
            .getExample('#basic')
            .locator('tui-copy')
            .nth(2)
            .locator('.t-content > span');

        await expect(content).toHaveCSS('text-overflow', 'ellipsis');

        expect(
            await content.evaluate((node) => node.scrollWidth - node.clientWidth),
        ).toBeGreaterThan(0);
    });
});
