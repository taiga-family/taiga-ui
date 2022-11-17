import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiPrimitiveSpinButtonHarness} from './primitive-spin-button.harness';

export class TuiPrimitiveYearMonthPaginationHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-year-month-pagination`;
    private readonly button = this.locatorForOptional(`#year-btn`);
    private readonly primitveSpinButton = this.locatorFor(TuiPrimitiveSpinButtonHarness);

    async clickYear(): Promise<void> {
        return (await this.button())?.click();
    }

    async isLeftDisabled(): Promise<boolean> {
        return (await this.primitveSpinButton()).isLeftDisabled();
    }

    async isRightDisabled(): Promise<boolean> {
        return (await this.primitveSpinButton()).isRightDisabled();
    }
}
