import type {Locator} from '@playwright/test';

import {TuiTextfieldWithDataListPO} from './textfield-with-data-list.po';

export class TuiInputPhoneInternationalPO extends TuiTextfieldWithDataListPO {
    public select: Locator = this.host.locator('.t-ipi-select');
}
