import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiLoaderHarness} from './loader.harness';

export class TuiButtonHarness extends TuiComponentHarness {
    static hostSelector = `[tuiButton]`;
    private readonly loader = this.locatorForOptional(TuiLoaderHarness);

    async isLoading(): Promise<boolean> {
        return !!(await this.loader());
    }
}
