import {Locator} from '@playwright/test';

export class TuiTablePaginationPO {
    readonly linesPerPageButton = this.host.locator(
        `[automation-id=tui-table-pagination__lines-per-page-wrapper] tui-hosted-dropdown`,
    );

    readonly linesPerPageDropdown = this.host.page().locator(`tui-dropdown`);

    constructor(private readonly host: Locator) {}
}
