import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DataList', () => {
    test('Custom list', async ({page}) => {
        await tuiGoto(page, DemoRoute.DataList);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#custom-list');

        await example.scrollIntoViewIfNeeded();
        await example.locator('[tuiSelectLike]').click();
        await page.locator('tui-dropdown [tuiOption]').nth(0).hover();

        await expect
            .soft(page.locator('tui-dropdown'))
            .toHaveScreenshot('01-data-list.png');
    });

    test('Links', async ({page}) => {
        await tuiGoto(page, DemoRoute.DataList);
        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#links');

        await example.scrollIntoViewIfNeeded();
        await example.locator('[tuiDropdownAuto]').click();
        await page.locator('tui-dropdown [tuiOption]').nth(0).hover();
        await page.waitForTimeout(300);

        await expect
            .soft(page.locator('tui-dropdown'))
            .toHaveScreenshot('02-data-list.png');
    });

    test('Submenu', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: bug https://github.com/taiga-family/taiga-ui/issues/9837
            'This feature is only relevant in Chrome',
        );

        await page.setViewportSize({width: 750, height: 400});
        await tuiGoto(page, DemoRoute.DataList);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#submenu');

        await example.scrollIntoViewIfNeeded();
        await documentationPagePO.prepareBeforeScreenshot();

        await example.locator('button').click();
        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');

        await expect.soft(page).toHaveScreenshot('03-1-data-list.png');

        await page.waitForTimeout(100);
        await page.keyboard.down('Enter');
        await page.waitForTimeout(100);

        await expect(page.locator('tui-dropdown tui-data-list')).toHaveCount(2);
        await expect.soft(page).toHaveScreenshot('03-2-data-list.png');

        await page.keyboard.down('ArrowRight');

        await expect.soft(page).toHaveScreenshot('03-3-data-list.png');

        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');

        await expect.soft(page).toHaveScreenshot('03-4-data-list.png');

        await page.waitForTimeout(100);
        await page.keyboard.down('Enter');
        await page.waitForTimeout(100);

        await expect(page.locator('tui-dropdown tui-data-list')).toHaveCount(3);
        await expect.soft(page).toHaveScreenshot('03-5-data-list.png');

        await page.keyboard.down('ArrowRight');

        await expect.soft(page).toHaveScreenshot('03-6-data-list.png');

        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');

        await expect(page.locator('tui-dropdown tui-data-list')).toHaveCount(3);
        await expect.soft(page).toHaveScreenshot('03-7-data-list.png');

        await page.waitForTimeout(100);
        await page.keyboard.down('Enter');
        await page.waitForTimeout(100);

        await expect(page.locator('tui-dropdown tui-data-list')).toHaveCount(3);
        await expect.soft(page).toHaveScreenshot('03-8-data-list.png');
    });

    test('Form control', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Skip flaky in Safari');

        await tuiGoto(page, DemoRoute.DataList);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#form-control');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').first().click();
        await documentationPagePO.prepareBeforeScreenshot();

        await expect
            .soft(page.locator('tui-dropdown'))
            .toHaveScreenshot('04-data-list.png');
    });

    test('Complex', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Skip flaky in Safari');

        await page.setViewportSize({width: 1500, height: 900});
        await tuiGoto(page, DemoRoute.DataList);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#complex');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(example).toBeInViewport();

        await expect.soft(page).toHaveScreenshot('05-data-list.png');

        const money = page.locator('tui-dropdown').locator('[name="moneyValue"]').nth(0);

        await money.focus();
        await money.clear();
        await money.fill('2000');
        await money.press('Enter');

        await expect.soft(page).toHaveScreenshot('06-data-list.png');

        await page.locator('[automation-id="tui-data-list-email-option"]').click();

        const email = page
            .locator('[automation-id="tui-data-list-email-field"]')
            .locator('[name="emailValue"]')
            .nth(0);

        await email.focus();
        await email.clear();
        await email.fill('demo@taiga-ui.io');
        await email.press('Enter');

        await expect.soft(page).toHaveScreenshot('07-data-list.png');

        await page.locator('[automation-id="tui-data-list-range-option"]').click();

        const range = page.locator('input[tuiInputDateRange]').nth(0);

        await range.focus();
        await range.clear();
        await range.fill('04.02.2022 – 04.02.2023');
        await range.press('Enter');

        await expect.soft(page).toHaveScreenshot('08-data-list.png');

        // prevent calendar items from overlapping
        await range.hover();
        await range.blur();

        await page.locator('[automation-id="tui-data-list-calendar-option"]').click();
        await page.locator('[automation-id="tui-calendar-sheet__cell"]').nth(4).click();

        await expect.soft(page).toHaveScreenshot('09-data-list.png');
    });

    test('Options with long text', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Skip flaky in Safari');

        await page.setViewportSize({width: 750, height: 900});
        await tuiGoto(page, DemoRoute.DataList);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#options-with-long-text');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await documentationPagePO.prepareBeforeScreenshot();

        await expect.soft(page).toHaveScreenshot('10-data-list.png');
    });
});
