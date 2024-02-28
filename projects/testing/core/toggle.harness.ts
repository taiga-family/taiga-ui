import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiToggleHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-toggle';
    public input = this.locatorFor('input');

    public async toggle(): Promise<void> {
        return (await this.input()).click();
    }

    public async getIcons(): Promise<TuiSvgHarness[]> {
        return this.locatorForAll(TuiSvgHarness)();
    }
}
