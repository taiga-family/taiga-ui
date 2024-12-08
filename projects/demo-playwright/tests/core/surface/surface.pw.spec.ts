import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Surface', () => {
    test('Layers', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, `${DemoRoute.Surface}/Layers`);

        const example = new TuiDocumentationPagePO(page).getExample('#layers');

        await expect(example).toHaveScreenshot('01-layers.png');
    });
});
