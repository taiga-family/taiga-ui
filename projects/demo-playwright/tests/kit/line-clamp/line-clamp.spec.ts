import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('LineClamp', () => {
    test.use({viewport: {width: 750, height: 300}});

    test.describe('basic text', () => {
        const basicText = 'Lorem ipsum Gaudeamus igiturCarpe diem Veni, vidi, vici';

        test('linesLimit=1', async ({page}) => {
            const pagePO = new TuiDocumentationPagePO(page);

            await tuiGoto(
                page,
                `/components/line-clamp/API?content=${basicText}&linesLimit=1`,
            );
            await pagePO.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('01-1-line-clamp.png');
            await pagePO.apiPageExample.locator('tui-line-clamp').hover();
            await expect(page).toHaveScreenshot('01-2-line-clamp.png');
        });

        test('linesLimit=2', async ({page}) => {
            const pagePO = new TuiDocumentationPagePO(page);

            await tuiGoto(
                page,
                `/components/line-clamp/API?content=${basicText}&linesLimit=2`,
            );
            await pagePO.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('02-1-line-clamp.png');
            await pagePO.apiPageExample.locator('tui-line-clamp').hover();
            await expect(page).toHaveScreenshot('02-2-line-clamp.png');
        });
    });

    test.describe('Very long word', () => {
        const textWithLongWord =
            'The near incomprehensibility of the instructions made assembling the desk a nightmare.';

        test('linesLimit=1 and only long word', async ({page}) => {
            const pagePO = new TuiDocumentationPagePO(page);

            await tuiGoto(
                page,
                `/components/line-clamp/API?content=${textWithLongWord}&linesLimit=1`,
            );
            await pagePO.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('03-1-line-clamp.png');
            await pagePO.apiPageExample.locator('tui-line-clamp').hover();
            await expect(page).toHaveScreenshot('03-2-line-clamp.png');
        });

        test('linesLimit=2 and text with long word on the 2nd line', async ({page}) => {
            const pagePO = new TuiDocumentationPagePO(page);

            await tuiGoto(
                page,
                `/components/line-clamp/API?content=${textWithLongWord}&linesLimit=2`,
            );
            await pagePO.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('04-1-line-clamp.png');
            await pagePO.apiPageExample.locator('tui-line-clamp').hover();
            await expect(page).toHaveScreenshot('04-2-line-clamp.png');
        });
    });

    test.describe('Single line (break-all) and multiple line (break-words)', () => {
        [
            {width: 60, linesLimit: 1},
            {width: 60, linesLimit: 3},
        ].forEach(({width, linesLimit}, index) => {
            test(`linesLimit=${linesLimit}`, async ({page}) => {
                const pagePO = new TuiDocumentationPagePO(page);

                await tuiGoto(
                    page,
                    `components/line-clamp/API?style.maxWidth.px=${width}&linesLimit=${linesLimit}`,
                );
                await pagePO.prepareApiPageBeforeScreenshot();
                await expect(page).toHaveScreenshot(`05-1-line-clamp__${index}.png`);
                await pagePO.apiPageExample.locator('tui-line-clamp').hover();
                await expect(page).toHaveScreenshot(`05-2-line-clamp__${index}.png`);
            });
        });
    });
});
