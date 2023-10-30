import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiTablePaginationPO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`TablePagination`, () => {
    test.describe(`Dropdown with \`[size]\`-options (amount items per page)`, () => {
        test.use({viewport: {width: 600, height: 600}});

        test(`Basic case`, async ({page}) => {
            await tuiGoto(page, `/components/table-pagination/API`);

            const {apiPageExample} = new TuiDocumentationPagePO(page);

            const tablePaginationPO = new TuiTablePaginationPO(apiPageExample);

            const {tablePagination, linesPerPageSelect} = tablePaginationPO;

            await linesPerPageSelect.click();

            await tablePaginationPO.waitForCheckmarkIcon(page);

            await expect(tablePagination).toHaveScreenshot(`0-[size]-dropdown-base.png`);
        });

        test(`With very long option name`, async ({page}) => {
            const longNumber = Number.MAX_SAFE_INTEGER;

            await tuiGoto(
                page,
                `/components/table-pagination/API?items=[0, ${longNumber}]&size=${longNumber}&total=${longNumber}&page=0`,
            );

            const {apiPageExample} = new TuiDocumentationPagePO(page);

            const tablePaginationPO = new TuiTablePaginationPO(apiPageExample);

            const {tablePagination, linesPerPageSelect} = tablePaginationPO;

            await linesPerPageSelect.click();

            await tablePaginationPO.waitForCheckmarkIcon(page);

            await expect(tablePagination).toHaveScreenshot(`1-[size]-dropdown-base.png`);
        });
    });

    test(`Custom size-option content`, async ({page}) => {
        await tuiGoto(page, `/components/table-pagination`);

        const {customSizeOptionContent} = new TuiDocumentationPagePO(page);

        const tablePaginationPO = new TuiTablePaginationPO(customSizeOptionContent);

        const {linesPerPageSelect} = tablePaginationPO;

        await linesPerPageSelect.click();

        await tablePaginationPO.waitForCheckmarkIcon(page);

        const dropdown = page.locator(`tui-dropdown`);

        await expect(dropdown).toHaveScreenshot(`2-[sizeOptionContent]-dropdown.png`);
    });
});
