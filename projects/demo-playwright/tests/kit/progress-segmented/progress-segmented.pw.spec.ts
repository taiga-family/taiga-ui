import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe} = test;

describe('TuiProgressSegmented', () => {
    // https://github.com/taiga-family/taiga-ui/issues/11333
    test('[tuiProgressColorSegments] is compatible with too many segments', async ({
        page,
    }) => {
        await tuiGoto(
            page,
            `${DemoRoute.ProgressSegmented}/API?tuiProgressColorSegments$=2&segments=15&value=14&max=15&sandboxWidth=466`,
        );

        await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
            'progress-segmented--tuiProgressColorSegments-2-segments-15-value-14-max-15-sandboxWidth-466.png',
        );
    });
});
