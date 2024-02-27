import {Locator} from '@playwright/test';

import {TuiDocumentationApiPagePO} from './documentation-api-page.po';

export class TuiDocumentationPagePO extends TuiDocumentationApiPagePO {
    protected readonly submitFormControlButton = this.apiPageExample.locator(
        '[automation-id="tui-demo-button__submit-state"]',
    );

    protected readonly resetFormControlButton = this.apiPageExample.locator(
        '[automation-id="tui-demo-button__reset-state"]',
    );

    protected getExample(selector: string): Locator {
        return this.page.locator(`${selector} [automation-id="tui-doc-example"]`);
    }

    protected async selectFormControlUpdateOnMethod(
        method: 'blur' | 'change' | 'submit',
    ): Promise<void> {
        const selector = this.apiPageExample.locator(
            '[automation-id="tui-demo-select__expand-update-on"]',
        );

        await selector.click();
        await this.page
            .locator('tui-data-list[role=listbox] [tuiOption]')
            .filter({hasText: method})
            .click();
    }
}
