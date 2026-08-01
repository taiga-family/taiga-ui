import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DropdownSelection', () => {
    test.use({viewport: {width: 400, height: 400}});

    test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.DropdownSelection));

    test('current range must be a text node only', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#textarea');

        await example.scrollIntoViewIfNeeded();
        await api.waitStableState();
        await page.waitForTimeout(500); // flaky in Safari

        await example.locator('textarea').focus();
        await page.keyboard.press('Control+ArrowLeft');

        await expect.soft(page).toHaveScreenshot('01-dropdown-selection.png');

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await api.waitStableState();

        await expect.soft(page).toHaveScreenshot('02-dropdown-selection.png');

        await example.locator('textarea').fill('');
        await example.locator('textarea').fill('@');
        await api.waitStableState();

        await expect.soft(page).toHaveScreenshot('03-dropdown-selection.png');

        await page.locator('button[tuiOption]').first().click();
        await api.waitStableState();
        await page.waitForTimeout(300); // flaky in Safari

        await expect.soft(page).toHaveScreenshot('04-dropdown-selection.png');
    });

    test('dropdown after new line char must be opened', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#textarea');

        await example.scrollIntoViewIfNeeded();
        await api.waitStableState();

        await page.waitForTimeout(500); // flaky in Safari

        await example.locator('textarea').focus();

        await example.locator('textarea').fill('\n@');

        await expect(page.locator('tui-dropdown')).toBeVisible();
    });

    test('dropdown in scrollable textarea must be properly positioned', async ({
        page,
    }) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#textarea');

        await example.scrollIntoViewIfNeeded();
        await api.waitStableState();

        await page.waitForTimeout(500); // flaky in Safari

        await example.locator('textarea').focus();

        await example
            .locator('textarea')
            .fill('hi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\nhi\n @');

        await expect(page.locator('tui-dropdown')).toBeVisible();
        await expect.soft(page).toHaveScreenshot('05-dropdown-selection-scrolled.png');
    });

    test('keyArrowDown / keyArrowUp must be handled correctly', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#textarea');

        await example.scrollIntoViewIfNeeded();
        await api.waitStableState();

        await page.waitForTimeout(500); // flaky in Safari

        await example.locator('textarea').focus();

        await example.locator('textarea').fill('\n\n\n ');

        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('@');

        await expect(page.locator('tui-dropdown')).toBeVisible();
        await expect.soft(page).toHaveScreenshot('06-dropdown-selection-keydown.png');
    });

    test('textarea with many line breaks and scroll', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#textarea');
        const textarea = example.locator('textarea');

        await example.scrollIntoViewIfNeeded();
        await textarea.focus();
        await textarea.clear();

        for (let i = 0; i < 20; i++) {
            await page.keyboard.press('Enter');
        }

        await page.keyboard.type('@');
        await page.waitForTimeout(200);
        await api.waitStableState();

        await expect
            .soft(page)
            .toHaveScreenshot('07-dropdown-selection-scrolled-bottom.png');

        await textarea.evaluate((el) => {
            el.scrollTop = 220;
        });

        await page.waitForTimeout(200);
        await api.waitStableState();

        await expect
            .soft(page)
            .toHaveScreenshot('08-dropdown-selection-scrolled-top.png');
    });
});
