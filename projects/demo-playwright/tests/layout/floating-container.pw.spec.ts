import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('FloatingContainer', () => {
    test('stretches secondary action nested in tui-expand to full width', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example.getByLabel('Floating visibility').check();
        await example.getByLabel('Second action visibility').check();

        await expect
            .soft(example.locator('[tuiFloatingContainer]'))
            .toHaveScreenshot('01-floating-container.png');
    });
});
