import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import type {TuiHintOptions} from '@taiga-ui/core';

test.describe('TuiHint', () => {
    test('TuiHint works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Hint);
        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.locator('tui-avatar').hover();

        await expect(example).toHaveScreenshot('01-hint.png');
    });

    test.describe('Manual hint works', () => {
        const directions: Array<TuiHintOptions['direction']> = [
            'bottom-left',
            'bottom-right',
            'bottom',
            'left-bottom',
            'left-top',
            'left',
            'right-bottom',
            'right-top',
            'right',
            'top-left',
            'top-right',
            'top',
            ['bottom', 'left'],
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

                    await expect(page).toHaveScreenshot(
                        `02-hint-manual-direction-${directionIndex}__${direction}-and-width__${width}.png`,
                    );
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

            await expect(page).toHaveScreenshot(
                `03-hint-mode-${mode}-tuiHintShowDelay-0.png`,
            );
        });

        test(`${mode} mode hint with delay`, async ({page}) => {
            await page.setViewportSize({width: 750, height: 200});
            await tuiGoto(
                page,
                `/directives/hint/API?tuiHintShowDelay=1000&darkMode=${mode}`,
            );
            const example = new TuiDocumentationPagePO(page);

            await example.prepareBeforeScreenshot();

            await example.apiPageExample.locator('span').hover();
            await page.waitForTimeout(0);

            await expect(page).toHaveScreenshot(
                `03-hint-mode-${mode}-tuiHintShowDelay-1000__wait-0.png`,
            );

            await page.waitForTimeout(500);

            await expect(page).toHaveScreenshot(
                `03-hint-mode-${mode}-tuiHintShowDelay-1000_wait-500.png`,
            );

            await page.waitForTimeout(500);

            await expect(page).toHaveScreenshot(
                `03-hint-mode-${mode}-tuiHintShowDelay-1000_wait-1000.png`,
            );
        });
    });

    test('Tooltip horizontal direction', async ({page}) => {
        await tuiGoto(page, DemoRoute.Tooltip);
        const example = new TuiDocumentationPagePO(page).getExample('#example-base');

        await example.locator('[tuiTooltip]').nth(0).hover();

        await expect(example).toHaveScreenshot('04-tooltip-left.png');
    });

    test('Tooltip vertical direction', async ({page}) => {
        await tuiGoto(page, DemoRoute.Tooltip);
        const example = new TuiDocumentationPagePO(page).getExample(
            '#repeating-template',
        );

        await example.locator('[tuiTooltip]').nth(0).hover();
        await page.waitForTimeout(300);

        await expect(example).toHaveScreenshot('05-tooltip-bottom.png');
    });

    test('Hint direction with priority -> bottom, left', async ({page}) => {
        await page.setViewportSize({width: 1280, height: 300});
        await tuiGoto(
            page,
            '/directives/hint-manual/API?tuiHintManual=true&tuiHintDirection$=12',
        );

        await new TuiDocumentationPagePO(page).prepareBeforeScreenshot();

        await expect(page).toHaveScreenshot('06-hint-direction__bottom.png');

        await page.setViewportSize({width: 1280, height: 150});

        await expect(page).toHaveScreenshot('06-hint-direction__left.png');
    });

    test('TuiHint customizing works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Hint);
        const example = new TuiDocumentationPagePO(page).getExample('#customizing');

        await example.locator('tui-avatar').hover();
        await page.waitForTimeout(300);

        await expect(example).toHaveScreenshot('07-hint.png');
    });
});
