import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputYear', () => {
    let input: Locator;
    let documentationPO: TuiDocumentationPagePO;

    test.describe('Does not allow incorrect year entry', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputYear}/API?max=2020`);

            documentationPO = new TuiDocumentationPagePO(page);
            input = documentationPO.demo.locator('input');
            await documentationPO.prepareBeforeScreenshot();
            await input.click();
        });

        test('12345 => 1234', async ({page}) => {
            await input.pressSequentially('123456789', {delay: 100}); // Types slower, like a user

            await expect(page).toHaveScreenshot('01-input-year.png');
        });

        test('2040 => 2020', async ({page}) => {
            await input.pressSequentially('2040');

            await expect.soft(page).toHaveScreenshot('02-input-year.png');
        });

        test('0000 => blur => 0', async ({page}) => {
            await input.pressSequentially('0000', {delay: 100}); // Types slower, like a user

            await expect.soft(page).toHaveScreenshot('03-input-year.png');

            await input.blur();

            await expect.soft(page).toHaveScreenshot('04-input-year.png');
        });

        test('0040 => blur => 40', async ({page}) => {
            await input.pressSequentially('0040');

            await expect.soft(page).toHaveScreenshot('05-input-year.png');

            await input.blur();

            await expect.soft(page).toHaveScreenshot('06-input-year.png');
        });
    });

    test.describe('Value validation on blur', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputYear}/API?max=2024&min=2020`);

            documentationPO = new TuiDocumentationPagePO(page);
            input = documentationPO.demo.locator('input');
            await documentationPO.prepareBeforeScreenshot();
            await input.click();
        });

        test('can not be less than min', async ({page}) => {
            await input.pressSequentially('2005');

            await expect.soft(page).toHaveScreenshot('07-input-year.png');

            await input.blur();

            await expect.soft(page).toHaveScreenshot('08-input-year.png');
        });
    });

    test.describe('need select date from dropdown', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputYear}/API`);

            documentationPO = new TuiDocumentationPagePO(page);
            input = documentationPO.demo.locator('input');
            await documentationPO.prepareBeforeScreenshot();
            await input.click();
        });

        test('empty input => select date via calendar => new date inside text field', async ({
            page,
        }) => {
            const cell = page.locator(
                '[automation-id="tui-calendar-year__cell"]:has-text("2020")',
            );

            await cell.scrollIntoViewIfNeeded();

            await expect.soft(page).toHaveScreenshot('09-input-year.png');

            await cell.click();

            await expect.soft(page).toHaveScreenshot('10-input-year.png');
        });

        test('type 2020 => select new date via calendar => new date inside text field', async ({
            page,
        }) => {
            await input.pressSequentially('2020');

            const cell = page.locator(
                '[automation-id="tui-calendar-year__cell"]:has-text("2030")',
            );

            await cell.scrollIntoViewIfNeeded();

            await expect.soft(page).toHaveScreenshot('11-input-year.png');

            await cell.click();

            await expect.soft(page).toHaveScreenshot('12-input-year.png');
        });
    });

    test.describe('Min year is set to 2020 and max is set to 2025', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputYear}/API?min=2020&max=2025&sandboxExpanded=true`,
            );

            documentationPO = new TuiDocumentationPagePO(page);
            input = documentationPO.demo.locator('input');

            await input.click();
            await page.keyboard.press('Escape'); // close dropdown
        });

        test('should not allow years below 2020', async () => {
            await input.pressSequentially('2019');
            await expect(input).toHaveValue('2019');
            await expect(documentationPO.value).toContainText('"value": null');

            await input.blur();
            await expect(input).toHaveValue('2020');
            await expect(documentationPO.value).toContainText('"value": 2020');
        });

        test('should not allow years greater than 2025', async () => {
            await input.pressSequentially('2030');
            await expect(input).toHaveValue('2025');
            await expect(documentationPO.value).toContainText('"value": 2025');

            await input.blur();
            await expect(input).toHaveValue('2025');
            await expect(documentationPO.value).toContainText('"value": 2025');
        });
    });
});
