import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSpinButtonHarness} from './spin-button.harness';

export class TuiCalendarSpinHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-calendar-spin';

    private readonly buttonLeft = this.locatorForOptional(
        'button[tuiIconButton]:first-child',
    );

    private readonly content = this.locatorForOptional('.t-calendar-title');

    private readonly buttonRight = this.locatorForOptional(
        'button[tuiIconButton]:last-child',
    );

    private readonly button = this.locatorForOptional('#year-btn');
    private readonly primitiveSpinButton = this.locatorFor(TuiSpinButtonHarness);

    public async clickLeft(): Promise<void> {
        return (await this.buttonLeft())?.click();
    }

    public async getContentText(): Promise<string> {
        return (await this.content())?.text() ?? '';
    }

    public async clickRight(): Promise<void> {
        return (await this.buttonRight())?.click();
    }

    public async clickYear(): Promise<void> {
        return (await this.button())?.click();
    }

    public async isLeftDisabled(): Promise<boolean> {
        return (await this.primitiveSpinButton()).isLeftDisabled();
    }

    public async isRightDisabled(): Promise<boolean> {
        return (await this.primitiveSpinButton()).isRightDisabled();
    }
}
