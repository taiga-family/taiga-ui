import {TestKey} from '@angular/cdk/testing';
import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiAccordionItemHarness extends TuiContentContainerComponentHarness {
    protected static hostSelector = 'tui-accordion-item';

    private readonly header = this.locatorFor('.t-header');

    protected async getTitle(): Promise<string> {
        return (await this.locatorFor('.t-title')()).text();
    }

    protected async getContent(): Promise<string | null> {
        return (await this.locatorForOptional('.t-content')())?.text() ?? null;
    }

    protected async clickHeader(): Promise<void> {
        return (await this.locatorFor('.t-header')()).click();
    }

    protected async getBorders(): Promise<string | null> {
        return (await this.host()).getAttribute('data-borders');
    }

    protected async hasArrow(): Promise<boolean> {
        return (
            !!(await this.locatorForOptional(
                TuiSvgHarness.with({selector: '.t-icon'}),
            )()) ?? false
        );
    }

    protected async focus(): Promise<void> {
        return (await this.header()).focus();
    }

    protected async sendEscKey(): Promise<void> {
        return (await this.header()).sendKeys(TestKey.ESCAPE);
    }
}
