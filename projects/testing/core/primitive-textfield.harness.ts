import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiPrimitiveTextfieldHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-primitive-textfield';

    public async valueDecorationText(): Promise<string> {
        return (await this.locatorFor('tui-value-decoration')()).text();
    }

    public async inputPlaceholder(): Promise<string> {
        return (await this.locatorFor('input')()).getProperty('placeholder');
    }
}
