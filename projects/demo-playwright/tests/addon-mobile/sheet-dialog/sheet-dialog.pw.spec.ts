import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

async function emulateSnap(
    sheet: Locator,
    releaseEvent: 'touchcancel' | 'touchend',
    positions: readonly [number, ...number[]],
): Promise<void> {
    const [release, ...scrolls] = positions;

    await sheet.evaluate(
        (element, {releaseEvent, release, scrolls}) => {
            const offset = Number.parseFloat(
                getComputedStyle(element).getPropertyValue('--tui-offset'),
            );

            const firstStop = Math.max(
                0,
                Math.min(
                    ...Array.from(element.querySelectorAll<HTMLElement>('.t-stop')).map(
                        (stop) => stop.offsetTop - offset,
                    ),
                    element.clientHeight,
                ),
            );

            if (!firstStop) {
                throw new Error('Expected positive first sheet stop');
            }

            let scrollTop = Math.max(element.scrollTop, firstStop);

            Object.defineProperty(element, 'scrollTop', {
                configurable: true,
                get: () => scrollTop,
                set: (value: number) => {
                    scrollTop = value;
                },
            });

            element.dispatchEvent(new Event('touchstart', {bubbles: true}));
            element.scrollTop = firstStop * release;
            element.dispatchEvent(new Event(releaseEvent, {bubbles: true}));

            for (const position of scrolls) {
                element.scrollTop = firstStop * position;
                element.dispatchEvent(new Event('scroll'));
            }
        },
        {releaseEvent, release, scrolls},
    );
}

async function emulateSnapToFirstOpenStop(sheet: Locator): Promise<void> {
    await sheet.evaluate((element) => {
        const offset = Number.parseFloat(
            getComputedStyle(element).getPropertyValue('--tui-offset'),
        );

        const stops = Array.from(element.querySelectorAll<HTMLElement>('.t-stop')).map(
            (stop) => stop.offsetTop - offset,
        );

        const [firstStop, secondStop] = stops;

        if (firstStop === undefined || secondStop === undefined) {
            throw new Error('Expected at least two sheet stops');
        }

        const middle = (firstStop + secondStop) / 2;
        let scrollTop = secondStop;

        Object.defineProperty(element, 'scrollTop', {
            configurable: true,
            get: () => scrollTop,
            set: (value: number) => {
                scrollTop = value;
            },
        });

        element.dispatchEvent(new Event('touchstart', {bubbles: true}));
        element.scrollTop = middle;
        element.dispatchEvent(new Event('touchend', {bubbles: true}));

        element.scrollTop = (firstStop + middle) / 2;
        element.dispatchEvent(new Event('scroll'));

        element.scrollTop = firstStop;
        element.dispatchEvent(new Event('scroll'));
    });
}

test.describe('SheetDialog', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    for (const releaseEvent of ['touchend', 'touchcancel'] as const) {
        test(`Close sheet after ${releaseEvent} while snap keeps moving down`, async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.SheetDialog);
            await page.locator('tui-segmented a:has-text("API")').click();

            const example = new TuiDocumentationApiPagePO(page).demo;
            const button = example.locator('button:has-text("Click")');
            const sheet = page.locator('tui-sheet-dialog');

            await button.click();
            await expect(sheet).toBeVisible();
            await expect
                .poll(async () => sheet.evaluate((element) => element.scrollTop))
                .toBeGreaterThan(0);

            await emulateSnap(sheet, releaseEvent, [0.75, 0.6, 0.35]);
            await expect(sheet).toBeHidden();
        });
    }

    test('Keep sheet open when post-touch scroll slows down', async ({page}) => {
        await tuiGoto(page, DemoRoute.SheetDialog);
        await page.locator('tui-segmented a:has-text("API")').click();

        const example = new TuiDocumentationApiPagePO(page).demo;
        const sheet = page.locator('tui-sheet-dialog');

        await example.locator('button:has-text("Click")').click();
        await expect(sheet).toBeVisible();
        await emulateSnap(sheet, 'touchend', [0.75, 0.55, 0.45, 1]);
        await expect(sheet).toBeVisible();
    });

    test('Keep sheet open when snapping between open stops', async ({page}) => {
        await tuiGoto(page, DemoRoute.SheetDialog);

        const examples = new TuiDocumentationApiPagePO(page).examples;
        const example = examples.nth(2);
        const sheet = page.locator('tui-sheet-dialog');

        await example.getByRole('button', {name: 'Show/Hide'}).click();
        await expect(sheet).toBeVisible();
        await emulateSnapToFirstOpenStop(sheet);
        await expect(sheet).toBeVisible();
    });

    test('Close sheet by route navigation', async ({page}) => {
        await tuiGoto(page, DemoRoute.SheetDialog);
        await page.locator('tui-segmented a:has-text("API")').click();

        const example = new TuiDocumentationApiPagePO(page).demo;
        const button = example.locator('button:has-text("Click")');

        await button.click();
        await expect.soft(page).toHaveScreenshot('01-sheet-dialog.png');

        await page.evaluate(() => {
            history.back();
            history.back();
        });

        await expect.soft(page).toHaveScreenshot('02-sheet-dialog.png');
    });
});
