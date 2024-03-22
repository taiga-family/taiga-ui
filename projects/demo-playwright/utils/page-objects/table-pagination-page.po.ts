import type {Locator} from '@playwright/test';

export class TuiTablePaginationPO {
    public readonly linesPerPageButton = this.host.locator(
        '[automation-id=tui-table-pagination__lines-per-page-wrapper] button[tuiLink]',
    );

    public readonly linesPerPageDropdown = this.host.page().locator('tui-dropdown');

    constructor(private readonly host: Locator) {}
}
