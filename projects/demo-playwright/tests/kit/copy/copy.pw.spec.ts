import assert from 'node:assert';

import {DemoRoute} from '@demo/routes';
import {expect, test} from '@playwright/test';

for (const deviceScaleFactor of [1.1, 1.25, 1.5]) {
    test.describe(`Copy at DPR ${deviceScaleFactor}`, () => {
        test.use({contextOptions: {deviceScaleFactor, reducedMotion: 'reduce'}});

        for (const direction of ['ltr', 'rtl']) {
            test(`idle mask is opaque in ${direction}`, async ({page}) => {
                await page.route('https://**', async (route) => route.abort());
                await page.goto(DemoRoute.Copy, {waitUntil: 'domcontentloaded'});
                await page.mouse.move(0, 0);

                const copy = page.locator('tui-copy').first();
                const content = copy.locator('.t-content');

                await copy.evaluate((element, dir) => {
                    element.setAttribute('dir', dir);
                    element.style.setProperty('--tui-inline', dir === 'rtl' ? '-1' : '1');
                    element.style.setProperty(
                        '--tui-inline-start',
                        dir === 'rtl' ? 'right' : 'left',
                    );
                    element.style.setProperty(
                        '--tui-inline-end',
                        dir === 'rtl' ? 'left' : 'right',
                    );
                }, direction);
                await content.evaluate((element) => {
                    element.innerHTML =
                        '<span style="display: inline-block; width: 200px; height: 20px; background: black"></span>';
                    element.style.transition = 'none';
                    element.style.display = 'inline-block';
                });

                for (const offset of [0, 0.25, 0.5, 0.75]) {
                    await content.evaluate((element, shift) => {
                        element.style.transform = `translateX(${shift}px)`;
                        element.style.removeProperty('mask-image');
                    }, offset);

                    const bounds = await content.locator('span').boundingBox();

                    assert(bounds, 'Copy content must have a bounding box');

                    const clip = {
                        x: bounds.x + 4,
                        y: bounds.y + 4,
                        width: bounds.width - 8,
                        height: bounds.height - 8,
                    };

                    const masked = await page.screenshot({clip});

                    await content.evaluate((element) => {
                        element.style.maskImage = 'none';
                    });

                    expect(masked.equals(await page.screenshot({clip}))).toBe(true);
                }
            });
        }
    });
}

test('copy mask layers overlap by at least one pixel', async ({page}) => {
    await page.goto(DemoRoute.Copy, {waitUntil: 'domcontentloaded'});

    const stops = await page
        .locator('tui-copy .t-content')
        .first()
        .evaluate((element) => {
            const mask = getComputedStyle(element).maskImage;

            return [...mask.matchAll(/(?:^|\s)(\d+(?:\.\d+)?)px(?=[,)])/g)].map(
                ([, value]) => Number(value),
            );
        });

    // A zero-width overlap leaves a translucent seam at fractional DPRs.
    const [, firstOpaqueStop, secondOpaqueStop, secondTransparentStop] = stops;

    assert(
        firstOpaqueStop !== undefined &&
            secondOpaqueStop !== undefined &&
            secondTransparentStop !== undefined,
        'Expected pixel-based stops in both mask gradients',
    );

    expect(secondOpaqueStop - firstOpaqueStop).toBeGreaterThanOrEqual(1);
    expect(secondTransparentStop).toBe(secondOpaqueStop);
});
