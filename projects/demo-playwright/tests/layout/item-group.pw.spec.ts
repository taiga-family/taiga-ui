import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

interface ItemGroupTestState {
    __itemGroupInitialTransitions: string[];
}

test.describe('ItemGroup', () => {
    test.use({viewport: {width: 800, height: 720}});

    test('does not animate items on initialization', async ({page}) => {
        // Playwright uses reduced motion by default, so enable transitions before
        // reloading the page to reproduce the initialization behavior from #14785.
        await tuiGoto(page, DemoRoute.ItemGroup);
        await page.emulateMedia({reducedMotion: 'no-preference'});

        // The transition can start before page.reload() resolves, so install the
        // listener before navigation using an init script.
        await page.addInitScript(() => {
            const initialTransitions: string[] = [];

            document.addEventListener('transitionrun', (event) => {
                const target = event.target;

                if (
                    target instanceof HTMLElement &&
                    target.matches('#with-more tui-items-with-more .t-item')
                ) {
                    initialTransitions.push(event.propertyName);
                }
            });

            const state = globalThis as ItemGroupTestState & typeof globalThis;

            state.__itemGroupInitialTransitions = initialTransitions;
        });

        await page.reload();
        await expect(page.locator('#with-more .more')).toBeVisible();
        await page.waitForTimeout(300);

        const transitions = await page.evaluate(() => {
            const state = globalThis as ItemGroupTestState & typeof globalThis;

            return state.__itemGroupInitialTransitions;
        });

        expect(transitions).toEqual([]);
    });
});
