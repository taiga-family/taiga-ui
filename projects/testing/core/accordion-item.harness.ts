import {TestKey} from '@angular/cdk/testing';
import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiAccordionItemHarness extends TuiContentContainerComponentHarness {
    static hostSelector = `tui-accordion-item`;
    private readonly wrapper = this.locatorFor(`.t-wrapper`);

    async getTitle(): Promise<string> {
        return (await this.locatorFor(`.t-title`)()).text();
    }

    async getContent(): Promise<string | null> {
        return (await this.locatorForOptional(`.t-content`)())?.text() ?? null;
    }

    async clickHeader(): Promise<void> {
        return await (await this.locatorFor(`.t-header`)()).click();
    }

    async getBorders(): Promise<string | null> {
        return await (await this.host()).getAttribute(`data-tui-host-borders`);
    }

    async hasArrow(): Promise<boolean> {
        return (
            !!(await this.locatorForOptional(
                TuiSvgHarness.with({selector: `.t-icon`}),
            )()) ?? false
        );
    }

    async focus(): Promise<void> {
        return await (await this.wrapper()).focus();
    }

    async sendSpaceKey(): Promise<void> {
        return await (await this.wrapper()).sendKeys(` `);
    }

    async sendEscKey(): Promise<void> {
        return await (await this.wrapper()).sendKeys(TestKey.ESCAPE);
    }

    async sendEnterKey(): Promise<void> {
        return await (await this.wrapper()).sendKeys(TestKey.ENTER);
    }
}
