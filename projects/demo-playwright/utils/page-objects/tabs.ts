import type {Locator} from '@playwright/test';

export class TuiTabsPO {
    public readonly more = this.host.locator('> button.t-more');
    public readonly moreDropdown = this.host.page().locator('tui-dropdown');

    constructor(private readonly host: Locator) {}

    public getMoreOption(indexOrText: number | string): Locator {
        if (typeof indexOrText === 'number') {
            this.moreDropdown.locator('button[tuiTab]').locator(`nth=${indexOrText}`);
        }

        return this.moreDropdown.locator(`button[tuiTab]:has-text("${indexOrText}")`);
    }
}
