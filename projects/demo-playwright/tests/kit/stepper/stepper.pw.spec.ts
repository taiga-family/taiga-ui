import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Stepper', () => {
    test.use({viewport: {width: 350, height: 170}});

    test('horizontal orientation', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Stepper}/API?orientation=horizontal`);

        const po = new TuiDocumentationPagePO(page);
        const steps = po.demo.locator('[tuiStep]');

        await steps.nth(1).click();

        await expect.soft(po.demo).toHaveScreenshot('01-stepper.png');

        await steps.nth(2).click();

        await expect.soft(po.demo).toHaveScreenshot('02-stepper.png');
    });

    test('vertical orientation', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Stepper}/API?orientation=vertical`);

        const po = new TuiDocumentationPagePO(page);
        const steps = po.demo.locator('[tuiStep]');

        await steps.nth(1).click();

        await expect.soft(po.demo).toHaveScreenshot('03-stepper.png');

        await steps.nth(2).click();

        await expect.soft(po.demo).toHaveScreenshot('04-stepper.png');
    });

    test('scrolls the active step into view in RTL', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Stepper}/API?orientation=horizontal`);

        const po = new TuiDocumentationPagePO(page);
        const stepper = po.demo.locator('tui-stepper');
        const steps = po.demo.locator('[tuiStep]');

        await stepper.evaluate((element) => element.setAttribute('dir', 'rtl'));
        await expect(stepper).toHaveCSS('direction', 'rtl');

        // `dispatchEvent` avoids Playwright scrolling the off-screen step into view itself,
        // the scroll must come from the stepper component
        await steps.nth(4).dispatchEvent('click');

        await expect
            .poll(async () =>
                stepper.evaluate((element) => {
                    const step = element.querySelectorAll('[tuiStep]')[4] as HTMLElement;
                    const stepperRect = element.getBoundingClientRect();
                    const stepRect = step.getBoundingClientRect();

                    return {
                        visible:
                            stepRect.left >= stepperRect.left - 1 &&
                            stepRect.right <= stepperRect.right + 1,
                        scrollLeft: element.scrollLeft,
                    };
                }),
            )
            .toMatchObject({visible: true});

        // In RTL Chromium `scrollLeft` is negative once scrolled away from the start edge
        await expect
            .poll(async () => stepper.evaluate((element) => element.scrollLeft))
            .toBeLessThan(0);
    });
});
