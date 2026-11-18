import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiScrollbar RTL', () => {
    test('scrolls an element into view in RTL', async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);

        const example = new TuiDocumentationPagePO(page).getExample('#horizontal');
        const scrollbar = example.locator('tui-scrollbar');

        await example.scrollIntoViewIfNeeded();
        await expect
            .poll(async () =>
                scrollbar.evaluate(
                    (element) => element.scrollWidth > element.clientWidth,
                ),
            )
            .toBe(true);

        await scrollbar.evaluate((element) => element.setAttribute('dir', 'rtl'));
        await expect(scrollbar).toHaveCSS('direction', 'rtl');

        await scrollbar.evaluate((element) => {
            const target = element.querySelector('.line:last-child')!;

            target.dispatchEvent(
                new CustomEvent('tui-scroll-into-view', {
                    bubbles: true,
                    detail: target,
                }),
            );
        });

        await expect
            .poll(async () =>
                scrollbar.evaluate((element) => {
                    const target = element.querySelector('.line:last-child')!;
                    const scrollbarRect = element.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    const center = (targetRect.left + targetRect.right) / 2;
                    const containerCenter =
                        (scrollbarRect.left + scrollbarRect.right) / 2;

                    return {
                        centered: Math.abs(center - containerCenter) < 2,
                        scrollLeft: element.scrollLeft,
                    };
                }),
            )
            .toMatchObject({centered: true});

        // In RTL Chromium `scrollLeft` is negative once scrolled away from the start edge
        await expect
            .poll(async () => scrollbar.evaluate((element) => element.scrollLeft))
            .toBeLessThan(0);
    });
});
