import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiPrimitiveSpinButtonHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-spin-button`;

    async isLeftDisabled(): Promise<boolean> {
        return (await this.locatorFor(`#left-button`)()).hasClass(`t-arrow_hidden`);
    }

    async isRightDisabled(): Promise<boolean> {
        return (await this.locatorFor(`#right-button`)()).hasClass(`t-arrow_hidden`);
    }
}
