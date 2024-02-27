import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiTextfieldHarness extends TuiComponentHarness {
    protected static hostSelector = 'input[tuiTextfield], textarea[tuiTextfield]';

    protected async sendSpaceKey(): Promise<void> {
        return (await this.host()).sendKeys(' ');
    }
}
