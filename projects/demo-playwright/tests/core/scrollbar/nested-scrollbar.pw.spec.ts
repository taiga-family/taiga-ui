import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiScrollbar', () => {
    test('nested scrollbar on Parent paragraph hover', async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#nested-scrollbar');

        await example.locator('p').filter({hasText: 'Parent'}).hover();
        await expect(example).toHaveScreenshot('scrollbar-nested-hover-parent.png');
    });

    test('centers an element horizontally in RTL', async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);

        const example = new TuiDocumentationPagePO(page).getExample('#horizontal');
        const scrollbar = example.locator('tui-scrollbar');

        await scrollbar.evaluate((element) => {
            element.setAttribute('dir', 'rtl');

            const target = document.createElement('div');

            target.id = 'rtl-scroll-target';
            target.style.width = '800px';
            target.style.height = '1px';
            element.querySelector('.t-content')?.append(target);
            target.dispatchEvent(
                new CustomEvent('tui-scroll-into-view', {
                    bubbles: true,
                    detail: target,
                }),
            );
        });

        await expect
            .poll(() => scrollbar.evaluate((element) => element.scrollLeft))
            .toBeLessThan(0);

        await expect
            .poll(() =>
                scrollbar.evaluate((element) => {
                    const target = element.querySelector('#rtl-scroll-target');

                    if (!target) {
                        return Number.POSITIVE_INFINITY;
                    }

                    const rect = target.getBoundingClientRect();
                    const host = element.getBoundingClientRect();

                    return Math.abs(
                        rect.left + rect.width / 2 - host.left - element.clientWidth / 2,
                    );
                }),
            )
            .toBeLessThan(2);
    });
});
