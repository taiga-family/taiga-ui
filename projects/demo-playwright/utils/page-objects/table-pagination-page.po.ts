import {Locator, Page, test} from '@playwright/test';

const {expect} = test;

export class TuiTablePaginationPO {
    readonly tablePagination: Locator = this.host.locator(`tui-table-pagination`);

    readonly linesPerPageSelect = this.host.locator(
        `[automation-id=tui-table-pagination__lines-per-page-wrapper] tui-hosted-dropdown`,
    );

    constructor(private readonly host: Locator) {}

    async waitForCheckmarkIcon(page: Page): Promise<void> {
        const dropdownCheckMark = page.locator(`tui-dropdown tui-svg.t-checkmark use`);

        await expect(dropdownCheckMark).toBeVisible();

        const dropdownCheckMarkBox = await dropdownCheckMark.boundingBox();

        expect(dropdownCheckMarkBox?.height).toBeGreaterThan(0);
    }
}
