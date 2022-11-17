import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiButtonHarness} from './button.harness';

export class TuiPrimitiveSpinButtonHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-spin-button`;

    async isLeftDisabled(): Promise<boolean> {
        return (await this.locatorForAll(TuiButtonHarness)())[0].hasClass(
            `t-arrow_hidden`,
        );
    }

    async isRightDisabled(): Promise<boolean> {
        return (await this.locatorForAll(TuiButtonHarness)())[1].hasClass(
            `t-arrow_hidden`,
        );
    }
}
