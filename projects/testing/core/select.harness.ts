import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiHostedDropdownHarness} from './hosted-dropdown.harness';

export class TuiSelectHarness extends TuiComponentHarness {
    static hostSelector = `tui-select`;
    private readonly hostedDropdown = this.locatorFor(TuiHostedDropdownHarness);

    async sendSpaceKey(): Promise<void> {
        return (await this.hostedDropdown()).sendSpaceKey();
    }

    async sendEscKey(): Promise<void> {
        return (await this.hostedDropdown()).sendEscKey();
    }
}
