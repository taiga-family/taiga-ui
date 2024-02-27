import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiPrimitiveTextfieldHarness extends TuiComponentHarness {
    protected static hostSelector = 'tui-primitive-textfield';

    protected async valueDecorationText(): Promise<string> {
        return (await this.locatorFor('tui-value-decoration')()).text();
    }

    protected async inputPlaceholder(): Promise<string> {
        return (await this.locatorFor('input')()).getProperty('placeholder');
    }
}
