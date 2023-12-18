import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiToggleHarness extends TuiComponentHarness {
    static hostSelector = 'tui-toggle';
    protected input = this.locatorFor('input');

    async toggle(): Promise<void> {
        return (await this.input()).click();
    }

    async getIcons(): Promise<TuiSvgHarness[]> {
        return this.locatorForAll(TuiSvgHarness)();
    }
}
