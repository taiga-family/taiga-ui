import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textarea', () => {
    test.use({viewport: {width: 400, height: 500}});

    test('correctly shows character with descenders inside placeholder', async ({
        page,
    }) => {
        const placeholder = 'qwertypgj_';

        await tuiGoto(page, `components/textarea/API?placeholder=${placeholder}`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const textarea = apiPageExample.getByPlaceholder(placeholder);

        await textarea.click();

        await expect(apiPageExample).toHaveScreenshot(
            '01-character-with-descenders-inside-placeholder.png',
        );
    });
});
