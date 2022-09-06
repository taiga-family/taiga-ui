import {ComponentHarness} from '@angular/cdk/testing';

export class TuiBadgeHarness extends ComponentHarness {
    static hostSelector = `tui-badge`;

    async text(): Promise<string> {
        return await (await this.host()).text();
    }

    async padding(): Promise<string | null> {
        return await (await this.host()).getAttribute(`data-tui-host-padding`);
    }

    async hasClass(cls: string): Promise<boolean> {
        return await (await this.host()).hasClass(cls);
    }
}
