import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Icons Customization', () => {
    test.describe('Examples', () => {
        let documentationPage: TuiDocumentationPagePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.IconsCustomization);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('custom names', async () => {
            const example = documentationPage.getExample('#base');

            await expect(example).toHaveScreenshot('01-custom-names.png');
        });

        test('custom styles', async () => {
            const example = documentationPage.getExample('#styles');

            await expect(example).toHaveScreenshot('02-custom-styles.png');
        });
    });
});
