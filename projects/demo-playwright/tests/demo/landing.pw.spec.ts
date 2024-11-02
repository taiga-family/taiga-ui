import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Landing', () => {
    test.use({
        viewport: {width: 360, height: 740},
    });

    test('take snapshot', async ({page}) => {
        await tuiGoto(page, '/', {
            hideHeader: false,
        });

        await expect(page).toHaveScreenshot('landing-360-740.png');
    });
});
