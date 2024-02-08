import {expect, test} from '@playwright/test';

test.describe('SSG', () => {
    test.use({
        javaScriptEnabled: false,
    });

    test('has prerendered landing by Angular Universal', async ({page}) => {
        await page.goto('/', {waitUntil: 'domcontentloaded'});

        await expect(page).toHaveScreenshot('ssg.png');
    });
});
