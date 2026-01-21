import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {type TuiHintOptions} from '@taiga-ui/core';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('TuiHint', () => {
    test('TuiHint works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Hint);
        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.locator('[tuiAvatar]').hover();

        await expect.soft(example).toHaveScreenshot();
    });

    test.describe('Manual hint works', () => {
        const directions: Array<TuiHintOptions['direction']> = [
            'bottom-start',
            'bottom-end',
            'bottom',
            'start-bottom',
            'start-top',
            'start',
            'end-bottom',
            'end-top',
            'end',
            'top-start',
            'top-end',
            'top',
            ['bottom', 'start'],
        ];

        directions.forEach((direction, directionIndex) => {
            [256, 1280].forEach((width) => {
                test(`tuiHintDirection is ${direction}, viewport width is ${width}px`, async ({
                    page,
                }) => {
                    await page.setViewportSize({width, height: 300});
                    await tuiGoto(
                        page,
                        `/directives/hint-manual/API?tuiHintManual=true&tuiHintDirection$=${directionIndex}`,
                    );
                    await new TuiDocumentationPagePO(page).prepareBeforeScreenshot();

                    await expect.soft(page).toHaveScreenshot();
                });
            });
        });
    });

    ['true', 'false'].forEach((mode) => {
        test(`${mode} mode hint without delay`, async ({page}) => {
            await page.setViewportSize({width: 750, height: 200});
            await tuiGoto(
                page,
                `/directives/hint/API?tuiHintShowDelay=0&darkMode=${mode}`,
            );
            const example = new TuiDocumentationPagePO(page);

            await example.prepareBeforeScreenshot();
            await example.apiPageExample.locator('span').hover();
            await page.waitForTimeout(0);

            await expect.soft(page).toHaveScreenshot();
        });

        test(`${mode} mode hint with delay`, async ({page}) => {
            await page.setViewportSize({width: 750, height: 200});
            await tuiGoto(
                page,
                `${DemoRoute.Hint}/API?tuiHintShowDelay=1000&darkMode=${mode}`,
                {date: null},
            );
            const example = new TuiDocumentationPagePO(page);

            await example.prepareBeforeScreenshot();

            await page.clock.install();
            await example.apiPageExample.locator('span').hover();
            await page.clock.runFor(0);

            await expect.soft(page).toHaveScreenshot();

            await page.clock.runFor(600);

            await expect.soft(page).toHaveScreenshot();

            await page.clock.runFor(1500);

            await expect.soft(page).toHaveScreenshot();
        });
    });

    test('Tooltip horizontal direction', async ({page}) => {
        await tuiGoto(page, DemoRoute.Tooltip);
        const example = new TuiDocumentationPagePO(page).getExample('#example-base');

        await example.locator('[tuiTooltip]').nth(0).hover();

        await expect.soft(example).toHaveScreenshot();
    });

    test('Tooltip vertical direction', async ({page}) => {
        await tuiGoto(page, DemoRoute.Tooltip);
        const example = new TuiDocumentationPagePO(page).getExample(
            '#repeating-template',
        );

        await example.locator('[tuiTooltip]').nth(0).hover();
        await page.waitForTimeout(300);

        await expect.soft(example).toHaveScreenshot();
    });

    test('Hint direction with priority -> bottom, left', async ({page}) => {
        await page.setViewportSize({width: 1280, height: 300});
        await tuiGoto(
            page,
            '/directives/hint-manual/API?tuiHintManual=true&tuiHintDirection$=12',
        );

        await new TuiDocumentationPagePO(page).prepareBeforeScreenshot();

        await expect.soft(page).toHaveScreenshot();

        await page.setViewportSize({width: 1280, height: 150});

        await expect.soft(page).toHaveScreenshot();
    });

    test('TuiHint customizing works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Hint);
        const example = new TuiDocumentationPagePO(page).getExample('#customizing');

        await example.locator('[tuiAvatar]').hover();
        await page.waitForTimeout(300);

        await expect.soft(example).toHaveScreenshot();
    });

    test.describe('Mobile', () => {
        test.use(TUI_PLAYWRIGHT_MOBILE);

        test('Increment inside hint', async ({page}) => {
            const example = new TuiDocumentationPagePO(page).getExample('#basic');

            await tuiGoto(page, DemoRoute.Hint);
            await example.scrollIntoViewIfNeeded();
            await example.locator('[tuiAvatar]').click();

            const button = page.locator('tui-hint button');

            await button.click();
            await button.click();
            await button.click();
            await page.locator('tui-hint').click();
            await expect.soft(page).toHaveScreenshot();

            await example.click();
            await expect.soft(page).toHaveScreenshot();
        });
    });
});
