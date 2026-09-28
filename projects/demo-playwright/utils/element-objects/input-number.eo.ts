import {Locator} from '@playwright/test';
import {TUI_INPUT_NUMBER_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class InputNumberPO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('textbox');
    public readonly stepUp = this.host.locator('button', {hasText: '+'});
    public readonly stepDown = this.host.locator('button', {hasText: '-'});

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_NUMBER_LOCATORS.HOST);
    }
}
