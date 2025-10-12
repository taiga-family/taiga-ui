import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiAvatarHarness extends TuiComponentHarness {
    public static hostSelector = '[tuiAvatar]';

    protected async text(): Promise<string> {
        return (await this.host()).text();
    }
}
