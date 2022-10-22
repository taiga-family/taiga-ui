import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiToggleHarness extends TuiComponentHarness {
    static hostSelector = `tui-toggle`;
    protected _input = this.locatorFor(`input`);

    async toggle(): Promise<void> {
        return (await this._input()).click();
    }

    async getIcons(): Promise<TuiSvgHarness[]> {
        return this.locatorForAll(TuiSvgHarness)();
    }
}
