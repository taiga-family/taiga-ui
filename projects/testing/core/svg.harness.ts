import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiSvgHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-svg';

    public async click(): Promise<void> {
        return (await this.host()).click();
    }

    public async text(): Promise<string> {
        return (await this.host()).text();
    }

    public async isInnerHTML(): Promise<boolean> {
        return !!(await this.locatorForOptional('div')());
    }

    public async getUse(): Promise<string | null> {
        return (
            (await this.locatorForOptional('use')())?.getAttribute('xlink:href') ?? null
        );
    }
}
