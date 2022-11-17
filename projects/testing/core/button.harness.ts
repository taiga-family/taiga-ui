import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiLoaderHarness} from './loader.harness';

export class TuiButtonHarness extends TuiComponentHarness {
    static hostSelector = `button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]`;
    private readonly loader = this.locatorForOptional(TuiLoaderHarness);

    async isLoading(): Promise<boolean> {
        return !!(await this.loader());
    }

    async hasClass(input: string): Promise<boolean> {
        return (await this.host()).hasClass(input);
    }
}
