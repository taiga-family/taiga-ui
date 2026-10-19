import {TuiRadioHarness} from './radio.harness';

export class TuiCheckboxHarness extends TuiRadioHarness {
    public static override hostSelector = 'input[type="checkbox"][tuiCheckbox]';

    public async isIndeterminate(): Promise<boolean> {
        return !!(await (await this.host()).getProperty('indeterminate'));
    }

    public async uncheck(): Promise<void> {
        if (await this.isChecked()) {
            await (await this.host()).click();
        }
    }
}
