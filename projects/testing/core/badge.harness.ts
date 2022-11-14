import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiBadgeHarness extends TuiComponentHarness {
    static hostSelector = `tui-badge`;

    async text(): Promise<string> {
        return (await this.host()).text();
    }

    async padding(): Promise<string | null> {
        return (await this.host()).getAttribute(`data-tui-host-padding`);
    }

    async hasClass(cls: string): Promise<boolean> {
        return (await this.host()).hasClass(cls);
    }
}
