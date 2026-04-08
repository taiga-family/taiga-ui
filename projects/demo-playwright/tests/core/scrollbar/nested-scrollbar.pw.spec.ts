import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiScrollbar', () => {
    test('nested scrollbar on Parent paragraph hover', async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#nested-scrollbar');

        await example.locator('p').filter({hasText: 'Parent'}).hover();
        await expect(example).toHaveScreenshot('scrollbar-nested-hover-parent.png');
    });
});
