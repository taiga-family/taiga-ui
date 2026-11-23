import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {TUI_SCROLLBAR_LOCATORS} from '@taiga-ui/testing/locators';

test('the vertical thumb is proportional to the visible content', async ({page}) => {
    await tuiGoto(page, DemoRoute.Scrollbar);

    const scrollbar = new TuiDocumentationPagePO(page)
        .getExample('#vertical')
        .locator(TUI_SCROLLBAR_LOCATORS.HOST);

    const track = scrollbar.locator(TUI_SCROLLBAR_LOCATORS.VERTICAL_BAR);
    const thumb = track.locator(TUI_SCROLLBAR_LOCATORS.THUMB);

    await scrollbar.evaluate((element) => {
        element.style.blockSize = '400px';
    });

    const visibleFraction = await scrollbar.evaluate(
        ({clientHeight, scrollHeight}) => clientHeight / scrollHeight,
    );

    await expect
        .poll(async () => {
            const trackHeight = (await track.boundingBox())?.height ?? 0;
            const thumbHeight = (await thumb.boundingBox())?.height ?? 0;

            return Math.abs(thumbHeight / trackHeight - visibleFraction);
        })
        .toBeLessThan(0.02);
});
