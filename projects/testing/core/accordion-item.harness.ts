import {TestKey} from '@angular/cdk/testing';
import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

export class TuiAccordionItemHarness extends TuiContentContainerComponentHarness {
    public static hostSelector = 'tui-accordion-item';

    private readonly header = this.locatorFor('.t-header');

    public async getTitle(): Promise<string> {
        return (await this.locatorFor('.t-title')()).text();
    }

    public async getContent(): Promise<string | null> {
        return (await this.locatorForOptional('.t-content')())?.text() ?? null;
    }

    public async clickHeader(): Promise<void> {
        return (await this.locatorFor('.t-header')()).click();
    }

    public async getBorders(): Promise<string | null> {
        return (await this.host()).getAttribute('data-borders');
    }

    public async hasArrow(): Promise<boolean> {
        return !!(await this.locatorForOptional('.t-icon')()) ?? false;
    }

    public async focus(): Promise<void> {
        return (await this.header()).focus();
    }

    public async sendEscKey(): Promise<void> {
        return (await this.header()).sendKeys(TestKey.ESCAPE);
    }
}
