import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DataList', () => {
    test('Custom list', async ({page}) => {
        await tuiGoto(page, '/components/data-list');

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#custom');

        await example.scrollIntoViewIfNeeded();
        await example.locator('tui-select').click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(page.locator('tui-dropdown')).toHaveScreenshot('01-data-list.png');
    });

    test('Links', async ({page}) => {
        await tuiGoto(page, '/components/data-list');
        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#links');

        await example.scrollIntoViewIfNeeded();
        await example.locator('[tuiDropdownOpen]').click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(page.locator('tui-dropdown')).toHaveScreenshot('02-data-list.png');
    });

    test('Submenu', async ({page}) => {
        await page.setViewportSize({width: 750, height: 400});
        await tuiGoto(page, '/components/data-list');

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#submenu');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await documentationPagePO.prepareBeforeScreenshot();
        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');
        await page.waitForTimeout(100);
        await page.keyboard.down('Enter');
        await page.waitForTimeout(100);
        await expect(page).toHaveScreenshot('03-1-data-list.png');
        await page.keyboard.down('ArrowRight');
        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');
        await page.waitForTimeout(100);
        await page.keyboard.down('Enter');
        await page.waitForTimeout(100);
        await expect(page).toHaveScreenshot('03-2-data-list.png');
        await page.keyboard.down('ArrowRight');
        await page.keyboard.down('ArrowDown');
        await page.keyboard.down('ArrowDown');
        await expect(page).toHaveScreenshot('03-3-data-list.png');
        await page.waitForTimeout(100);
        await page.keyboard.down('Enter');
        await page.waitForTimeout(100);
        await expect(page).toHaveScreenshot('03-4-data-list.png');
    });

    test('Form control', async ({page}) => {
        await tuiGoto(page, '/components/data-list');

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#control');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').first().click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(page.locator('tui-dropdown')).toHaveScreenshot('04-data-list.png');
    });

    test('Complex', async ({page}) => {
        await page.setViewportSize({width: 1400, height: 500});
        await tuiGoto(page, '/components/data-list');

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#complex');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(page).toHaveScreenshot('05-data-list.png');

        const money = page
            .locator('tui-dropdown')
            .locator('[automation-id="tui-primitive-textfield__native-input"]')
            .nth(0);

        await money.focus();
        await money.fill('');
        await money.fill('2000');
        await money.press('Enter');
        await expect(page).toHaveScreenshot('06-data-list.png');

        await page.locator('[automation-id="tui-data-list-email-option"]').click();

        const email = page
            .locator('[automation-id="tui-data-list-email-field"]')
            .locator('[automation-id="tui-primitive-textfield__native-input"]')
            .nth(0);

        await email.focus();
        await email.fill('');
        await email.fill('demo@taiga-ui.io');
        await email.press('Enter');

        await expect(page).toHaveScreenshot('07-data-list.png');

        await page.locator('[automation-id="tui-data-list-range-option"]').click();

        const range = page
            .locator('[automation-id="tui-data-list-range-field"]')
            .locator('[automation-id="tui-primitive-textfield__native-input"]')
            .nth(0);

        await range.focus();
        await range.fill('');
        await range.fill('04.02.2022 – 04.02.2023');
        await range.press('Enter');

        await expect(page).toHaveScreenshot('08-data-list.png');

        await page.locator('[automation-id="tui-data-list-calendar-option"]').click();
        await page.locator('[automation-id="tui-calendar-sheet__cell"]').nth(4).click();

        await expect(page).toHaveScreenshot('09-data-list.png');
    });

    test('Options with long text', async ({page}) => {
        await page.setViewportSize({width: 750, height: 900});
        await tuiGoto(page, '/components/data-list');

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#long-text-options');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(page).toHaveScreenshot('10-data-list.png');
    });
});
