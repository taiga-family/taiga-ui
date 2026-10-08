import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiRadioHarness extends TuiComponentHarness {
    public static hostSelector = 'input[type="radio"][tuiRadio]';

    public async isChecked(): Promise<boolean> {
        return !!(await (await this.host()).getProperty('checked'));
    }

    public async isDisabled(): Promise<boolean> {
        return !!(await (await this.host()).getProperty('disabled'));
    }

    public async check(): Promise<void> {
        if (!(await this.isChecked())) {
            await (await this.host()).click();
        }
    }

    public async getSize(): Promise<string> {
        return (await (await this.host()).getAttribute('data-size')) ?? '';
    }
}
