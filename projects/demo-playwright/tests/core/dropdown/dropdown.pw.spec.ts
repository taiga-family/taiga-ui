import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Dropdown', () => {
    test.use({viewport: {width: 720, height: 720}});

    test('base', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await page.waitForTimeout(300);

        await expect(page).toHaveScreenshot('01-dropdown.png');
    });

    test('Interesting', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        const example = new TuiDocumentationPagePO(page).getExample('#interesting');

        await example.scrollIntoViewIfNeeded();
        await example.locator('input').click();
        await page.waitForTimeout(300);

        await expect(page).toHaveScreenshot('02-dropdown.png');
    });

    test('Appearance', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        const example = new TuiDocumentationPagePO(page).getExample('#appearance');

        await example.scrollIntoViewIfNeeded();
        await example.locator('input').click();
        await page.waitForTimeout(300);

        await expect(page).toHaveScreenshot('03-dropdown.png');
    });

    test('Hosted dropdown', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const example = new TuiDocumentationPagePO(page).getExample('#menu');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await page.waitForTimeout(300);

        await expect(page).toHaveScreenshot('04-dropdown.png');
    });

    test('Hosted dropdown and custom position', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const example = new TuiDocumentationPagePO(page).getExample('#position');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await page.waitForTimeout(300);

        await expect(page).toHaveScreenshot('05-dropdown.png');
    });

    test('Hosted dropdown initial width', async ({page}) => {
        await tuiGoto(page, DemoRoute.Viewport);
        const example = new TuiDocumentationPagePO(page).getExample(
            '#dropdown-and-custom-portal',
        );

        await example.scrollIntoViewIfNeeded();
        // eslint-disable-next-line playwright/no-force-option
        await example.locator('.t2').click({force: true});
        await page.waitForTimeout(300);

        await expect(page).toHaveScreenshot('13-dropdown.png');
    });

    test('Esc -> Hosted Dropdown', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const example = new TuiDocumentationPagePO(page).getExample('#tui-dropdown-host');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button[tuiChevron]').click();

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
        await tuiGoto(page, `${DemoRoute.Dropdown}/API?tuiDropdownMaxHeight=150`);

        const api = new TuiDocumentationPagePO(page).apiPageExample;

        await api.locator('button').click();

        await expect(page).toHaveScreenshot('10-dropdown.png');

        await page.locator('tui-dropdown').locator('tui-scrollbar .t-thumb').click();

        await expect(page).toHaveScreenshot('11-dropdown.png');
    });

    test('Dropdown selection', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownSelection);

        const textarea = new TuiDocumentationPagePO(page)
            .getExample('#textarea')
            .locator('textarea');

        await textarea.clear();
        await textarea.press('@');
        await textarea.press('Backspace');

        await expect(page.locator('tui-dropdown')).toBeHidden();
    });

    test('hidden-host', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await page.waitForTimeout(300);

        expect(page.locator('tui-dropdown')).toBeDefined();

        await example.locator('button').evaluate((el) => {
            el.style.display = 'none';
        });

        await expect(page).toHaveScreenshot('12-dropdown-hidden-host.png');
    });

    test('late init control binding', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const example = new TuiDocumentationPagePO(page).getExample('#complex');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button[data-appearance="outline-grayscale"]').click();

        await expect(page).toHaveScreenshot('13-dropdown.png');

        await page.locator('tui-dropdown tui-data-list button').nth(0).click();
        await page.locator('tui-dropdown tui-data-list button').nth(1).click();

        await expect(page).toHaveScreenshot('14-dropdown.png');

        await example.locator('button[tuiChevron]').click();

        await expect(page).toHaveScreenshot('15-dropdown.png');

        await example.locator('button[data-appearance="outline-grayscale"]').click();

        await page.locator('tui-dropdown tui-data-list button').nth(2).click();

        await expect(page).toHaveScreenshot('16-dropdown.png');
    });
});
