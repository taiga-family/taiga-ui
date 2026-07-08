import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Carousel hydration', () => {
    // https://github.com/taiga-family/taiga-ui/issues/13787
    test('does not duplicate slides for long pending hydration (caused by long http request)', async ({
        page,
    }) => {
        const ANY_HTTP_REQUEST = /algolia\.net/i;

        /**
         * Pending HTTP request delays emission of ApplicationRef.isStable()
         * Hydration waits until `ApplicationRef.isStable() // true`
         * https://angular.dev/errors/NG0506#zoneless-applications
         */
        let releaseHydration = (): void => {};

        const held = new Promise<void>((resolve) => {
            releaseHydration = resolve;
        });

        const httpRequest = page.waitForRequest(ANY_HTTP_REQUEST);

        await page.route(ANY_HTTP_REQUEST, async (route) => {
            await held;
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({results: [{hits: [], nbHits: 0}]}),
            });
        });

        await tuiGoto(page, DemoRoute.Carousel);

        // Fail loudly if the "hold a stability-blocking request" assumption ever breaks
        await expect(httpRequest).resolves.toBeTruthy();

        const example = new TuiDocumentationPagePO(page).getExample('#basic');
        const slides = example.locator('tui-carousel .t-item');

        // Provide an opportunity to mutate DOM during pending hydration
        await page.waitForTimeout(2_000);

        await expect(slides).toHaveCount(2);
        await expect.soft(slides.nth(0)).toHaveText('0', {useInnerText: true});
        await expect.soft(slides.nth(1)).toHaveText('1', {useInnerText: true});

        releaseHydration();

        await page.waitForLoadState('networkidle');
        await expect(slides.nth(0)).toHaveText('0', {useInnerText: true});

        // Interactivity proves hydration actually completed
        const prev = example.locator('button').first();

        await expect(prev).toBeDisabled();
        await example.locator('button').last().click();
        await expect(prev).toBeEnabled();
    });
});
