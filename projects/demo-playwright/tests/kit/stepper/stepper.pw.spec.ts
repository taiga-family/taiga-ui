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

        const stepper = new TuiDocumentationPagePO(page).demo.locator('tui-stepper');

        await stepper.evaluate((element) => element.setAttribute('dir', 'rtl'));
        const lastStep = stepper.locator('[tuiStep]').last();

        await lastStep.evaluate((element: HTMLElement) => element.click());

        await expect
            .poll(() => stepper.evaluate((element) => element.scrollLeft))
            .toBeLessThan(0);

        await expect
            .poll(() =>
                stepper.evaluate((element) => {
                    const active = element.querySelector<HTMLElement>(
                        '[tuiStep]._active',
                    );

                    if (!active) {
                        return false;
                    }

                    const step = active.getBoundingClientRect();
                    const host = element.getBoundingClientRect();

                    return step.left >= host.left - 1 && step.right <= host.right + 1;
                }),
            )
            .toBe(true);
    });
});
