import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputChip', () => {
    test('the longest long words list', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputChip}/API?sandboxWidth=100`);

        const api = new TuiDocumentationApiPagePO(page);
        const input = api.demo.locator('[tuiInputChip]').first();

        await input.focus();
        await input.fill('Incomprehensibilities');
        await page.keyboard.press('Enter');
        await input.fill('Pseudohermaphroditism');
        await page.keyboard.press('Enter');
        await input.fill('Counterrevolutionaries');
        await page.keyboard.press('Enter');
        await input.fill('Deinstitutionalization');
        await page.keyboard.press('Enter');
        await input.fill('Otorhinolaryngological');
        await page.keyboard.press('Enter');
        await api.waitStableState();

        const textfield = api.demo.locator('tui-textfield[multi]').first();

        await expect(textfield).toHaveScreenshot('input-chip-with-longest-words.png');
    });
});
