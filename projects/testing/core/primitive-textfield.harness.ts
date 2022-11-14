import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiPrimitiveTextfieldHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-textfield`;

    async valueDecorationText(): Promise<string> {
        return (await this.locatorFor(`tui-value-decoration`)()).text();
    }

    async inputPlaceholder(): Promise<string> {
        return (await this.locatorFor(`input`)()).getProperty(`placeholder`);
    }
}
