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

        // `.line` boxes are as wide as the viewport, so centering one requires no
        // scrolling. Use a narrow target in the middle of the last line's text
        // instead: it sits off-center in the overflowing content, so centering it
        // requires scrolling away from the start edge. (A target at the very end
        // of the line cannot be centered at all: it already sits at the far edge
        // of the content, past the maximum scroll position.)
        await scrollbar.evaluate((element) => {
            const line = element.querySelector('.line:last-child')!;
            const target = document.createElement('span');

            target.className = 't-rtl-target';
            target.style.display = 'inline-block';
            target.style.inlineSize = '2rem';

            const text = line.firstChild as Text;
            const secondHalf = text.splitText(Math.floor(text.length / 2));

            line.insertBefore(target, secondHalf);
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
                    const target = element.querySelector('.t-rtl-target')!;
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
