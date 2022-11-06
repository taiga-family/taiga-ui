import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiAvatarHarness extends TuiComponentHarness {
    static hostSelector = `tui-avatar`;

    async text(): Promise<string> {
        return (await this.host()).text();
    }
}
