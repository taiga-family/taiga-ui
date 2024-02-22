import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiBadgeHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-badge';

    public async text(): Promise<string> {
        return (await this.host()).text();
    }

    public async padding(): Promise<string | null> {
        return (await this.host()).getAttribute('data-padding');
    }

    public async hasClass(cls: string): Promise<boolean> {
        return (await this.host()).hasClass(cls);
    }
}
