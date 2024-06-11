import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputTag', () => {
    test.describe('Examples', () => {
        test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.InputTag));

        test('errors of invalid control are shown correctly', async ({page}) => {
            const example = new TuiDocumentationPagePO(page).getExample('#base');
            const input = example.locator('[automation-id="tui-input-tag__native"]');

            // cspell:disable-next-line
            await input.fill('Very looooooooooooooooooooooooong Text');
            await page.keyboard.down('Enter');
            await expect(example).toHaveScreenshot('01-input-tag.png');
            await input.fill('1');
            await page.keyboard.down('Enter');
            await input.fill('2');
            await page.keyboard.down('Enter');
            await expect(example).toHaveScreenshot('02-input-tag.png');
        });

        test('switch theme mode', async ({page}) => {
            const example = new TuiDocumentationPagePO(page).getExample('#sizes');

            await expect(example).toHaveScreenshot('03-input-tag.png');
            await tuiGoto(page, DemoRoute.InputTag, {enableNightMode: true});
            await expect(example).toHaveScreenshot('04-input-tag.png');
        });

        test('allows to forbid spaces inside tags via property', async ({page}) => {
            const example = new TuiDocumentationPagePO(page).getExample(
                '#no-spaces-inside-tags',
            );
            const input = example.locator('[automation-id="tui-input-tag__native"]');

            await input.fill(' taiga ui library ');
            await page.keyboard.down('Enter');
            await expect(example).toHaveScreenshot('06-input-tag.png');
        });
    });

    test.describe('API', () => {
        test('placeholder', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputTag}/API?placeholder=placeholder`);

            const api = new TuiDocumentationApiPagePO(page);

            await api.apiPageExample.locator('tui-input-tag').click();
            await expect(api.apiPageExample).toHaveScreenshot('07-input-tag.png');
            await api.focusOnBody();
            await expect(api.apiPageExample).toHaveScreenshot('08-input-tag.png');
        });
    });
});
