import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiPrimitiveTextfield', () => {
    test.use({viewport: {width: 400, height: 500}});

    test('Tooltip in primitive-textfield works', async ({page}) => {
        await tuiGoto(
            page,
            'components/primitive-textfield/API?tuiHintContent=Ivan%20Ivanov&tuiHintDirection=left',
        );

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.scrollIntoViewIfNeeded();
        await apiPageExample.locator('tui-tooltip').click();

        await expect(page.locator('tui-hint')).toBeAttached();
        await expect(apiPageExample).toHaveScreenshot('01-hint.png');
    });

    test("tuiTextfieldPrefix + tuiTextfieldPostfix align on the same line with input's value", async ({
        page,
    }) => {
        await tuiGoto(
            page,
            'components/primitive-textfield/API?value=TEXT&tuiTextfieldPostfix=__!&tuiTextfieldPrefix=!__',
        );

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample.getByRole('textbox')).toHaveCSS(
            'text-indent',
            /\d+px/, // Auto-retrying assertions for test stability
        );
        await page.waitForTimeout(50);

        await expect(apiPageExample).toHaveScreenshot('02-prefix-postfix.png');
    });

    test('label should not be visible in focused state with filler', async ({page}) => {
        await tuiGoto(
            page,
            'components/primitive-textfield/API?tuiTextfieldFiller=filler&tuiTextfieldLabelOutside=true',
        );

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.getByRole('textbox').click();
        await expect(apiPageExample).toHaveScreenshot('03-label-filler.png');
    });
});
