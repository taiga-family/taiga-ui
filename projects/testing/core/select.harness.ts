import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiHostedDropdownHarness} from './hosted-dropdown.harness';

export class TuiSelectHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-select';
    private readonly hostedDropdown = this.locatorFor(TuiHostedDropdownHarness);

    public async sendSpaceKey(): Promise<void> {
        return (await this.hostedDropdown()).sendSpaceKey();
    }

    public async sendEscKey(): Promise<void> {
        return (await this.hostedDropdown()).sendEscKey();
    }
}
