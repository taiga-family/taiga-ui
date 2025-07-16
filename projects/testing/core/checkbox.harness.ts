import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiCheckboxHarness extends TuiComponentHarness {
    public static hostSelector = 'input[type="checkbox"][tuiCheckbox]';

    public async isChecked(): Promise<boolean> {
        return (await this.host()).getProperty('checked');
    }

    public async isIndeterminate(): Promise<boolean> {
        return (await this.host()).getProperty('indeterminate');
    }

    public async isDisabled(): Promise<boolean> {
        return (await this.host()).getProperty('disabled');
    }

    public async check(): Promise<void> {
        if (!(await this.isChecked())) {
            await this.click();
        }
    }

    public async uncheck(): Promise<void> {
        if (await this.isChecked()) {
            await this.click();
        }
    }

    public async toggle(): Promise<void> {
        await this.click();
    }

    public async getSize(): Promise<string | null> {
        return (await this.host()).getAttribute('data-size');
    }

    private async click(): Promise<void> {
        return (await this.host()).click();
    }
}
