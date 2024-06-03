import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiTextfieldHarness extends TuiComponentHarness {
    public static hostSelector =
        'input[tuiTextfieldLegacy], textarea[tuiTextfieldLegacy]';

    public async sendSpaceKey(): Promise<void> {
        return (await this.host()).sendKeys(' ');
    }
}
