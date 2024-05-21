import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiButtonHarness} from './button.harness';

export class TuiSpinButtonHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-spin-button';

    public async isLeftDisabled(): Promise<boolean> {
        return (await this.locatorForAll(TuiButtonHarness)())[0].hasClass('t-hidden');
    }

    public async isRightDisabled(): Promise<boolean> {
        return (await this.locatorForAll(TuiButtonHarness)())[1].hasClass('t-hidden');
    }
}
