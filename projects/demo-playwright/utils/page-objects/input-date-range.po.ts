import {Locator} from '@playwright/test';

export class TuiInputDateRangePO {
    readonly inputValue = this.host.inputValue();

    constructor(private readonly host: Locator) {}

    async click(): Promise<void> {
        await this.host.click();
    }

    async type(text: string): Promise<void> {
        await this.host.type(text);
    }
}
