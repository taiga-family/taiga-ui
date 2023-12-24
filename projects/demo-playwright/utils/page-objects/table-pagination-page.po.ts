import {Locator} from '@playwright/test';

export class TuiTablePaginationPO {
    readonly linesPerPageButton = this.host
        .getByTestId('tui-table-pagination__lines-per-page-wrapper')
        .locator('tui-hosted-dropdown');

    readonly linesPerPageDropdown = this.host.page().locator('tui-dropdown');

    constructor(private readonly host: Locator) {}
}
