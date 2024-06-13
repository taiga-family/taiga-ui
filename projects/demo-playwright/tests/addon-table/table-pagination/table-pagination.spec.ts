import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiTablePaginationPO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TablePagination', () => {
    test.describe('Dropdown with [size]-options (amount items per page)', () => {
        test.use({viewport: {width: 600, height: 250}});

        test('Basic case', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.TablePagination}/API`);

            const documentationPage = new TuiDocumentationPagePO(page);

            const {linesPerPageButton} = new TuiTablePaginationPO(
                documentationPage.apiPageExample.locator('tui-table-pagination'),
            );

            await linesPerPageButton.click();
            await documentationPage.prepareBeforeScreenshot();
            await expect(page).toHaveScreenshot('0-[size]-dropdown-base.png');
        });

        test('With very long option name', async ({page}) => {
            const longNumber = Number.MAX_SAFE_INTEGER;

            await tuiGoto(
                page,
                `/components/table-pagination/API?items=[0, ${longNumber}]&size=${longNumber}&total=${longNumber}&page=0`,
            );

            const documentationPage = new TuiDocumentationPagePO(page);
            const tablePagination = new TuiTablePaginationPO(
                documentationPage.apiPageExample.locator('tui-table-pagination'),
            );

            await tablePagination.linesPerPageButton.click();
            await documentationPage.prepareBeforeScreenshot();
            await expect(page).toHaveScreenshot('1-[size]-dropdown-base.png');
        });
    });

    test('Custom size-option content', async ({page}) => {
        await tuiGoto(page, DemoRoute.TablePagination);

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#custom-size-option-content');

        const tablePagination = new TuiTablePaginationPO(
            example.locator('tui-table-pagination'),
        );
        const {linesPerPageButton, linesPerPageDropdown} = tablePagination;

        await linesPerPageButton.click();
        await expect(linesPerPageDropdown).toHaveScreenshot(
            '2-[sizeOptionContent]-dropdown.png',
        );
    });
});
