import type {TestElement} from '@angular/cdk/testing';
import {TestKey} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiTagHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-tag';

    public async getCrossIcon(): Promise<TestElement | null> {
        return this.locatorForOptional('.t-icon')();
    }

    public async getBackgroundColor(): Promise<string> {
        const div = await this.locatorFor(':first-child')();

        return div.getCssValue('background-color');
    }

    public async getInput(): Promise<TestElement | null> {
        return this.locatorForOptional('input.t-edit')();
    }

    public async sendEnter(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.ENTER);
    }

    public async sendBackspace(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.BACKSPACE);
    }

    public async sendDelete(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.DELETE);
    }
}
