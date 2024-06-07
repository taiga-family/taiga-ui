import {TestKey} from '@angular/cdk/testing';
import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

export class TuiDropdownOpenHarness extends TuiContentContainerComponentHarness {
    public static hostSelector = '[tuiDropdownOpen]';

    public async sendSpaceKey(): Promise<void> {
        return (await this.host()).sendKeys(' ');
    }

    public async sendEscKey(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.ESCAPE);
    }
}
