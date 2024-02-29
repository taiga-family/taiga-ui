import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Dropdown', () => {
    test.use({viewport: {width: 720, height: 720}});

    test('base', async ({page}) => {
        await tuiGoto(page, '/directives/dropdown');
        const example = new TuiDocumentationPagePO(page).getExample('#base');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await expect(page).toHaveScreenshot('01-dropdown.png');
    });

    test('Interesting', async ({page}) => {
        await tuiGoto(page, '/directives/dropdown');
        const example = new TuiDocumentationPagePO(page).getExample('#full-featured');

        await example.scrollIntoViewIfNeeded();
        await example.locator('input').click();
        await expect(page).toHaveScreenshot('02-dropdown.png');
    });

    test('Appearance', async ({page}) => {
        await tuiGoto(page, '/directives/dropdown');
        const example = new TuiDocumentationPagePO(page).getExample('#appearance');

        await example.scrollIntoViewIfNeeded();
        await example.locator('input').click();
        await expect(page).toHaveScreenshot('03-dropdown.png');
    });

    test('Hosted dropdown', async ({page}) => {
        await tuiGoto(page, '/components/hosted-dropdown');
        const example = new TuiDocumentationPagePO(page).getExample('#menu');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await expect(page).toHaveScreenshot('04-dropdown.png');
    });

    test('Hosted dropdown and custom position', async ({page}) => {
        await tuiGoto(page, '/components/hosted-dropdown');
        const example = new TuiDocumentationPagePO(page).getExample('#position');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await expect(page).toHaveScreenshot('05-dropdown.png');
    });

    test('Esc -> Hosted Dropdown', async ({page}) => {
        await tuiGoto(page, '/components/hosted-dropdown');
        const example = new TuiDocumentationPagePO(page).getExample('#tui-dropdown-host');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button[tuiHostedDropdownHost]').click();
        await expect(page).toHaveScreenshot('06-dropdown.png');

        await page
            .locator("tui-dropdown [automation-id='tui-select__textfield']")
            .click();
        await expect(page).toHaveScreenshot('07-dropdown.png');

        await page.keyboard.press('Escape');
        await expect(page).toHaveScreenshot('08-dropdown.png');

        await page.keyboard.press('Escape');
        await expect(page).toHaveScreenshot('09-dropdown.png');
    });

    test('Scrollbar dropdown in active zone', async ({page}) => {
        await tuiGoto(page, '/directives/dropdown/API?tuiDropdownMaxHeight=150');

        const api = new TuiDocumentationPagePO(page).apiPageExample;

        await api.locator('button').click();
        await expect(page).toHaveScreenshot('10-dropdown.png');
        await page.locator('tui-dropdown').locator('tui-scrollbar .t-thumb').click();
        await expect(page).toHaveScreenshot('11-dropdown.png');
    });
});
