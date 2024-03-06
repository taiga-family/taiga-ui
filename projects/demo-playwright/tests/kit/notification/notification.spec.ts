import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('Notification', () => {
    const viewports = generateDimensions(180, 320, 10);
    let example: Locator;

    test.describe('default', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, '/components/notification/API');

            example = new TuiDocumentationPagePO(page).apiPageExample;
        });

        viewports.forEach(({width, height}) => {
            test(`width: ${width}`, async ({page}) => {
                await page.setViewportSize({width, height});
                await expect(example).toHaveScreenshot(`01-notification-${width}.png`);
            });
        });
    });
});

interface Dimensions {
    width: number;
    height: number;
}

function generateDimensions(start: number, end: number, step: number): Dimensions[] {
    const viewports: Dimensions[] = [];

    for (let width = start; width <= end; width += step) {
        viewports.push({width, height: 500});
    }

    return viewports;
}
