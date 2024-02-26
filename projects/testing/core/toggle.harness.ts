import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiToggleHarness extends TuiComponentHarness {
    protected static hostSelector = 'tui-toggle';
    protected input = this.locatorFor('input');

    protected async toggle(): Promise<void> {
        return (await this.input()).click();
    }

    protected async getIcons(): Promise<TuiSvgHarness[]> {
        return this.locatorForAll(TuiSvgHarness)();
    }
}
