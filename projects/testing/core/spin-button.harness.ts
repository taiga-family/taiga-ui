import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiButtonHarness} from './button.harness';

export class TuiSpinButtonHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-spin-button';

    public async isLeftDisabled(): Promise<boolean> {
        return (
            (await this.locatorForAll(TuiButtonHarness)())[0]?.hasClass(
                't-button_hidden',
            ) ?? false
        );
    }

    public async isRightDisabled(): Promise<boolean> {
        return (
            (await this.locatorForAll(TuiButtonHarness)())[1]?.hasClass(
                't-button_t-hidden',
            ) ?? false
        );
    }
}
