import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiSwitch', () => {
    ['m', 's'].forEach((size) => {
        ['ltr', 'rtl'].forEach((direction) => {
            test(`Invalid native iOS tint covers the track (${size}, ${direction})`, async ({
                page,
            }) => {
                await tuiGoto(page, DemoRoute.Switch);
                await page.locator('html').evaluate((element, dir) => {
                    element.setAttribute('dir', dir);
                }, direction);

                const input = new TuiDocumentationPagePO(page)
                    .getExample('#platforms')
                    .locator('[data-platform="ios"] input[tuiSwitch]')
                    .last();

                await expect(input).not.toBeChecked();
                await expect(input).toHaveAttribute('aria-invalid', 'true');

                // Exercise native iOS styles in browsers without native switches too.
                await input.evaluate((element, value) => {
                    element.classList.add('_native');
                    element.setAttribute('data-size', value);
                }, size);

                const bounds = await input.evaluate(({clientWidth, clientHeight}) => ({
                    width: clientWidth,
                    height: clientHeight,
                }));

                await expect
                    .poll(async () =>
                        input.evaluate((element) => {
                            const style = getComputedStyle(element, '::before');
                            const matrix = new DOMMatrix(style.transform);

                            return {
                                left: Number.parseFloat(style.left) + matrix.m41,
                                top: Number.parseFloat(style.top) + matrix.m42,
                                width: Number.parseFloat(style.width) * matrix.m11,
                                height: Number.parseFloat(style.height) * matrix.m22,
                            };
                        }),
                    )
                    .toEqual({left: 0, top: 0, ...bounds});
            });
        });
    });
});
