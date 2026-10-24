import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const POSITIONS = [
    ['bottom-start', 342, 418, 460, 418],
    ['bottom', 410, 418, 410, 418],
    ['bottom-end', 478, 418, 360, 418],
    ['top-start', 342, 222, 460, 222],
    ['top', 410, 222, 410, 222],
    ['top-end', 478, 222, 360, 222],
    ['start-top', 272, 282, 272, 350],
    ['start', 272, 320, 272, 320],
    ['start-bottom', 272, 358, 272, 290],
    ['end-top', 548, 282, 548, 350],
    ['end', 548, 320, 548, 320],
    ['end-bottom', 548, 358, 548, 290],
] as const;

for (const anchorPositioning of [true, false]) {
    test.describe(`Hint positioning: anchors ${anchorPositioning}`, () => {
        for (const centered of [true, false]) {
            POSITIONS.forEach(([direction, x, y, alignedX, alignedY], index) => {
                test(`${direction}, centered ${centered}`, async ({page}) => {
                    await page.setViewportSize({width: 1000, height: 800});
                    await tuiGoto(
                        page,
                        `${DemoRoute.HintManual}/API?tuiHintManual=true&tuiHintDirection$=${index}&tuiHintCentered=${centered}`,
                        {anchorPositioning, networkIdle: false},
                    );
                    const host = page.locator('tui-doc-demo button');
                    const hint = page.locator('tui-hint');
                    const native = [
                        anchorPositioning,
                        await page.evaluate(() =>
                            CSS.supports('left', 'calc(anchor-size() * abs(sign(1px)))'),
                        ),
                    ].every(Boolean);

                    await expect
                        .poll(async () =>
                            hint.evaluate((el) => el.classList.contains('_anchored')),
                        )
                        .toBe(native);

                    await host.evaluate((el) => {
                        Object.assign(el.style, {
                            position: 'fixed',
                            left: '460px',
                            top: '350px',
                            width: '80px',
                            height: '60px',
                            margin: '0',
                        });
                    });
                    await hint.evaluate((el) => {
                        el.style.width = '180px';
                        el.style.height = '120px';
                    });

                    await expect
                        .poll(async () => {
                            const rect = await hint.boundingBox();

                            return rect && [Math.round(rect.x), Math.round(rect.y)];
                        })
                        .toEqual(centered ? [x, y] : [alignedX, alignedY]);

                    // Exactly one arrow must remain visible after CSS selects a side.
                    await expect
                        .poll(async () =>
                            hint.evaluate(
                                (el) =>
                                    ['::before', '::after'].filter((pseudo) => {
                                        const style = getComputedStyle(el, pseudo);

                                        return (
                                            Number.parseFloat(style.width) > 0 &&
                                            Number.parseFloat(style.height) > 0
                                        );
                                    }).length,
                            ),
                        )
                        .toBe(1);
                });
            });
        }

        test('follows the anchor and changes the arrow side near a viewport edge', async ({
            page,
        }) => {
            await page.setViewportSize({width: 1000, height: 800});
            await tuiGoto(
                page,
                `${DemoRoute.HintManual}/API?tuiHintManual=true&tuiHintDirection$=12`,
                {anchorPositioning, networkIdle: false},
            );
            const host = page.locator('tui-doc-demo button');
            const hint = page.locator('tui-hint');

            await host.evaluate((el) => {
                Object.assign(el.style, {
                    position: 'fixed',
                    left: '460px',
                    top: '700px',
                    width: '80px',
                    height: '60px',
                    margin: '0',
                });
            });
            await hint.evaluate((el) => {
                el.style.width = '180px';
                el.style.height = '120px';
            });

            await expect
                .poll(async () => Math.round((await hint.boundingBox())!.x))
                .toBe(272);

            await host.evaluate((el) => {
                el.style.top = '350px';
            });

            // Native positioning retains the last successful fallback while it fits.
            const native = (await hint.getAttribute('class'))?.includes('_anchored');

            await expect
                .poll(async () => Math.round((await hint.boundingBox())!.y))
                .toBe(native ? 320 : 418);

            await host.evaluate((el) => {
                el.style.display = 'none';
            });

            await expect(hint).not.toBeInViewport();
        });

        test('removes the hint when its host is detached', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.HintManual}/API?tuiHintManual=true`, {
                anchorPositioning,
                networkIdle: false,
            });
            const hint = page.locator('tui-hint');

            await expect(hint).toBeVisible();
            await page.locator('tui-doc-demo button').evaluate((el) => el.remove());
            await expect(hint).not.toBeAttached();
        });

        test('preserves scale and fade with a local arrow during animations', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.HintManual}/API?tuiHintManual=true`, {
                anchorPositioning,
                networkIdle: false,
            });
            const hint = page.locator('tui-hint');

            await expect(hint).toBeVisible();
            await page.emulateMedia({reducedMotion: 'no-preference'});

            for (const name of ['tui-enter', 'tui-leave']) {
                await hint.evaluate((el, name) => {
                    el.classList.remove('tui-enter', 'tui-leave');
                    el.style.animationDuration = '1s';
                    el.getBoundingClientRect();
                    el.classList.add(name);
                }, name);

                await expect
                    .poll(async () =>
                        hint.evaluate((el) =>
                            el
                                .getAnimations()
                                .map(
                                    (animation) =>
                                        (animation as CSSAnimation).animationName,
                                ),
                        ),
                    )
                    .toEqual(['tuiFade', 'tuiScale']);

                await expect
                    .poll(async () =>
                        hint.evaluate((el) => {
                            const arrow = getComputedStyle(el, '::before');

                            return [
                                arrow.position,
                                el.style.getPropertyValue('--t-left'),
                            ];
                        }),
                    )
                    .toEqual(['absolute', expect.stringMatching(/%$/)]);

                await hint.evaluate((el) =>
                    el.getAnimations().forEach((animation) => animation.finish()),
                );
            }
        });
    });
}
