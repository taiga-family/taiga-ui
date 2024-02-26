import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiBadgeHarness extends TuiComponentHarness {
    protected static hostSelector = 'tui-badge';

    protected async text(): Promise<string> {
        return (await this.host()).text();
    }

    protected async padding(): Promise<string | null> {
        return (await this.host()).getAttribute('data-padding');
    }

    protected async hasClass(cls: string): Promise<boolean> {
        return (await this.host()).hasClass(cls);
    }
}
