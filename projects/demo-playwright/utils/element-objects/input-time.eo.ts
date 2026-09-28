import {Locator} from '@playwright/test';
import {TUI_INPUT_TIME_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiTextfieldWithDataListEO} from './textfield-with-data-list.eo';

export class TuiInputTimeEO extends TuiTextfieldWithDataListEO {
    public readonly nativePicker = this.host.locator('input[type="time"]');

    public override get host(): Locator {
        return this.page.locator(TUI_INPUT_TIME_LOCATORS.HOST);
    }
}
