import {DemoRoute} from '@demo/routes';
import {CMD, TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
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
            await pagePO.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('01-1-line-clamp.png');

            await pagePO.demo.locator('tui-line-clamp').hover();

            await expect.soft(page).toHaveScreenshot('01-2-line-clamp.png');
        });

        test('linesLimit=2', async ({page}) => {
            const pagePO = new TuiDocumentationPagePO(page);

            await tuiGoto(
                page,
                `/components/line-clamp/API?content=${basicText}&linesLimit=2`,
            );
            await pagePO.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('02-1-line-clamp.png');

            await pagePO.demo.locator('tui-line-clamp').hover();

            await expect.soft(page).toHaveScreenshot('02-2-line-clamp.png');
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
            await pagePO.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('03-1-line-clamp.png');

            await pagePO.demo.locator('tui-line-clamp').hover();

            await expect.soft(page).toHaveScreenshot('03-2-line-clamp.png');
        });

        test('linesLimit=2 and text with long word on the 2nd line', async ({page}) => {
            const pagePO = new TuiDocumentationPagePO(page);

            await tuiGoto(
                page,
                `/components/line-clamp/API?content=${textWithLongWord}&linesLimit=2`,
            );
            await pagePO.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('04-1-line-clamp.png');

            await pagePO.demo.locator('tui-line-clamp').hover();

            await expect.soft(page).toHaveScreenshot('04-2-line-clamp.png');
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
                await pagePO.prepareBeforeScreenshot();

                await expect.soft(page).toHaveScreenshot(`05-1-line-clamp-${index}.png`);

                await pagePO.demo.locator('tui-line-clamp').hover();

                await expect.soft(page).toHaveScreenshot(`05-2-line-clamp-${index}.png`);
            });
        });
    });

    test('do not close after click in hint area', async ({page}) => {
        await tuiGoto(page, DemoRoute.LineClamp);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');
        const lineClampElement = example.locator('tui-line-clamp').first();

        await example.scrollIntoViewIfNeeded();

        await lineClampElement.hover();
        const hintElement = page.locator('tui-popups .hint');

        await expect(hintElement).toBeInViewport();
        await expect.soft(example).toHaveScreenshot('06-1-line-clamp-basic.png');

        await hintElement.click();
        await hintElement.selectText();
        await expect(hintElement).toBeInViewport();
        await page.keyboard.press(`${CMD}+KeyC`);

        const content = await page.evaluate(async () => navigator.clipboard.readText());

        expect(content).toContain('Daenerys of the House Targaryen');
    });
});
