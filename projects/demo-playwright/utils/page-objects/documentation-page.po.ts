import {Locator, Page} from '@playwright/test';

export class TuiDocumentationPagePO {
    readonly apiPageExample: Locator = this.page.locator(`#demo-content`);

    constructor(private readonly page: Page) {}

    getExample(selector: string): Locator {
        return this.page.locator(`${selector} [automation-id="tui-doc-example"]`);
    }
}
