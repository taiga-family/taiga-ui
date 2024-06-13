import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Stepper', () => {
    test.use({viewport: {width: 350, height: 170}});

    test('horizontal orientation', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Stepper}/API?orientation=horizontal`);

        const po = new TuiDocumentationPagePO(page);
        const steps = po.apiPageExample.locator('[tuiStep]');

        await steps.nth(1).click();
        await expect(po.apiPageExample).toHaveScreenshot('01-stepper.png');

        await steps.nth(2).click();

        await expect(po.apiPageExample).toHaveScreenshot('02-stepper.png');
    });

    test('vertical orientation', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Stepper}/API?orientation=vertical`);

        const po = new TuiDocumentationPagePO(page);
        const steps = po.apiPageExample.locator('[tuiStep]');

        await steps.nth(1).click();
        await expect(po.apiPageExample).toHaveScreenshot('03-stepper.png');

        await steps.nth(2).click();

        await expect(po.apiPageExample).toHaveScreenshot('04-stepper.png');
    });
});
