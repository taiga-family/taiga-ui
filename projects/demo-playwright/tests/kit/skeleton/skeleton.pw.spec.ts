import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiSkeleton', () => {
    test.describe('Examples', () => {
        test('Text content', async ({page}) => {
            await tuiGoto(page, DemoRoute.Skeleton);
            const example = new TuiDocumentationPagePO(page).getExample('#text');

            await example.getByRole('switch').click();

            await expect(example.locator('[tuiSkeleton]').first()).toBeVisible();
        });
    });
});
