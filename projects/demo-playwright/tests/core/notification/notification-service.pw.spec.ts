import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('NotificationService', () => {
    test.use({viewport: {width: 720, height: 720}});

    test('is shown correctly', async ({page}) => {
        await tuiGoto(page, DemoRoute.Notification);
        const example = page.locator('#service');
        const showAlertButton = example.locator('button:has-text("Show string")').first();

        await showAlertButton.click();

        await expect
            .soft(page.locator('tui-notification-alert'))
            .toHaveScreenshot('01-alert.png');
    });

    test('notification with long label', async ({page}) => {
        await tuiGoto(
            page,
            `${DemoRoute.Notification}/API?label=long%20long%20long%20long%20long%20label`,
        );

        const demo = page.locator('tui-doc-demo');
        const showPopoverButton = demo.locator('button:has-text("Show popover")').first();

        await showPopoverButton.click();

        await expect
            .soft(page.locator('tui-notification-alert'))
            .toHaveScreenshot('02-alert-with-long-label.png');
    });
});
