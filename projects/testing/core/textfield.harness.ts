import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiTextfieldHarness extends TuiComponentHarness {
    static hostSelector = `input[tuiTextfield], textarea[tuiTextfield]`;

    async sendSpaceKey(): Promise<void> {
        return (await this.host()).sendKeys(` `);
    }
}
