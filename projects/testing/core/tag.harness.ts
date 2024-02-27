import {TestElement, TestKey} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiTagHarness extends TuiComponentHarness {
    protected static hostSelector = 'tui-tag';

    protected async getCrossIcon(): Promise<TuiSvgHarness | null> {
        return this.locatorForOptional(TuiSvgHarness.with({selector: '.t-icon'}))();
    }

    protected async getBackgroundColor(): Promise<string> {
        const div = await this.locatorFor(':first-child')();

        return div.getCssValue('background-color');
    }

    protected async getInput(): Promise<TestElement | null> {
        return this.locatorForOptional('input.t-edit')();
    }

    protected async sendEnter(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.ENTER);
    }

    protected async sendBackspace(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.BACKSPACE);
    }

    protected async sendDelete(): Promise<void> {
        return (await this.host()).sendKeys(TestKey.DELETE);
    }
}
