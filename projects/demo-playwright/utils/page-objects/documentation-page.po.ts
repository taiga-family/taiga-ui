import {type Locator} from '@playwright/test';
import {TUI_DATA_LIST_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiDocumentationApiPagePO} from './documentation-api-page.po';

export class TuiDocumentationPagePO extends TuiDocumentationApiPagePO {
    public readonly sourceCodeLink = this.page.locator('tui-doc-source-code a');

    public getExample(selector: string): Locator {
        return this.page.locator(`${selector} [automation-id="tui-doc-example"]`);
    }

    public async selectFormControlUpdateOnMethod(
        method: 'blur' | 'change' | 'submit',
    ): Promise<void> {
        const selector = this.demo.locator(
            '[automation-id="tui-demo-select__expand-update-on"]',
        );

        await selector.click();
        await this.page
            .locator('tui-data-list[role=listbox]')
            .locator(TUI_DATA_LIST_LOCATORS.OPTION)
            .filter({hasText: method})
            .click();
    }
}
