import {TuiComponentHarness} from '../../utils';

export class TuiSvgHarness extends TuiComponentHarness {
    static hostSelector = `tui-svg`;

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
