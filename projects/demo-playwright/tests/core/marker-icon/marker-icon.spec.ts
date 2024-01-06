import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('tuiMarkerIcon', () => {
    test('link', async ({page}) => {
        await tuiGoto(page, 'icons/marker-icon');
        const example = new TuiDocumentationPagePO(page).getExample('#modes');

        await expect(example).toHaveScreenshot('01-marker-icons.png');

        await example.locator('a[tuiMarkerIcon]').nth(0).hover();

        await expect(example).toHaveScreenshot('02-marker-icons-and-hovered-link.png');
    });
});
