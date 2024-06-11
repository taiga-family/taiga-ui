import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiDropdownOpenHarness} from './dropdown-open.harness';

export class TuiSelectHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-select';
    private readonly dropdown = this.locatorFor(TuiDropdownOpenHarness);

    public async sendSpaceKey(): Promise<void> {
        return (await this.dropdown()).sendSpaceKey();
    }

    public async sendEscKey(): Promise<void> {
        return (await this.dropdown()).sendEscKey();
    }
}
