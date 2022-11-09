import {TestElement, TestKey} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiTagHarness extends TuiComponentHarness {
    static hostSelector = `tui-tag`;

    async getCrossIcon(): Promise<TuiSvgHarness | null> {
        return this.locatorForOptional(TuiSvgHarness.with({selector: `.t-icon`}))();
    }

    async getBackgroundColor(): Promise<string> {
        const div = await this.locatorFor(`:first-child`)();

        return div.getCssValue(`background-color`);
    }

    async getInput(): Promise<TestElement | null> {
        return this.locatorForOptional(`input.t-edit`)();
    }

    async sendEnter(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.ENTER);
    }

    async sendBackspace(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.BACKSPACE);
    }

    async sendDelete(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.DELETE);
    }
}
