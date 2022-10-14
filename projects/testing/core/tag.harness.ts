import {TestElement, TestKey} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiTagHarness extends TuiComponentHarness {
    static hostSelector = `tui-tag`;

    async getCrossIcon(): Promise<TuiSvgHarness | null> {
        const svg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: `.t-icon`}),
        )();

        return svg;
    }

    async getBackgroundColor(): Promise<string> {
        const div = await this.locatorFor(`:first-child`)();

        return div.getCssValue(`background-color`);
    }

    async getInput(): Promise<TestElement | null> {
        const input = await this.locatorForOptional(`input.t-edit`)();

        return input;
    }

    async sendEnter(): Promise<void> {
        return await (await this.host()).sendKeys(TestKey.ENTER);
    }

    async sendBackspace(): Promise<void> {
        return await (await this.host()).sendKeys(TestKey.BACKSPACE);
    }

    async sendDelete(): Promise<void> {
        return await (await this.host()).sendKeys(TestKey.DELETE);
    }
}
