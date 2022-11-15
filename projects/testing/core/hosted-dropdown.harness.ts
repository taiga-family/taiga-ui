import {TestKey} from '@angular/cdk/testing';
import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

export class TuiHostedDropdownHarness extends TuiContentContainerComponentHarness {
    static hostSelector = `tui-hosted-dropdown`;

    async sendSpaceKey(): Promise<void> {
        return (await this.host()).sendKeys(` `);
    }

    async sendEscKey(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.ESCAPE);
    }
}
