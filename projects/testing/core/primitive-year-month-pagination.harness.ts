import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiPrimitiveSpinButtonHarness} from './primitive-spin-button.harness';

export class TuiPrimitiveYearMonthPaginationHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-year-month-pagination`;

    private readonly buttonLeft = this.locatorForOptional(
        `button[tuiIconButton]:first-child`,
    );

    private readonly content = this.locatorForOptional(`.t-calendar-title`);

    private readonly buttonRight = this.locatorForOptional(
        `button[tuiIconButton]:last-child`,
    );

    private readonly button = this.locatorForOptional(`#year-btn`);
    private readonly primitiveSpinButton = this.locatorFor(TuiPrimitiveSpinButtonHarness);

    async clickLeft(): Promise<void> {
        return (await this.buttonLeft())?.click();
    }

    async getContentText(): Promise<string> {
        return (await this.content())?.text() ?? ``;
    }

    async clickRight(): Promise<void> {
        return (await this.buttonRight())?.click();
    }

    async clickYear(): Promise<void> {
        return (await this.button())?.click();
    }

    async isLeftDisabled(): Promise<boolean> {
        return (await this.primitiveSpinButton()).isLeftDisabled();
    }

    async isRightDisabled(): Promise<boolean> {
        return (await this.primitiveSpinButton()).isRightDisabled();
    }
}
