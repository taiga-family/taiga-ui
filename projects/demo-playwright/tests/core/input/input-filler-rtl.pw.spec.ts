import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Input filler in RTL mode', () => {
    test('renders filler correctly in LTR and RTL', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Input}/API?filler=HH:MM`);

        const example = new TuiDocumentationApiPagePO(page).demo;
        const input = example.locator('[tuiInput]');

        await input.focus();
        await input.pressSequentially('12:3');
        await expect.soft(example).toHaveScreenshot('input-filler-ltr.png');
        await input.clear();
        await example.evaluate((node) => node.setAttribute('dir', 'rtl'));
        await input.focus();
        await input.pressSequentially('12:3');
        await expect.soft(example).toHaveScreenshot('input-filler-rtl.png');
    });
});
