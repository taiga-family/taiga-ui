import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiSvgHarness extends TuiComponentHarness {
    static hostSelector = `tui-svg`;

    async click(): Promise<void> {
        return (await this.host()).click();
    }

    async text(): Promise<string> {
        return (await this.host()).text();
    }

    async isInnerHTML(): Promise<boolean> {
        return !!(await this.locatorForOptional(`.t-src`)());
    }

    async getUse(): Promise<string | null> {
        return (
            (await this.locatorForOptional(`use`)())?.getAttribute(`xlink:href`) ?? null
        );
    }
}
