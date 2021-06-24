import {HarnessWith, withPredicate} from '../../utils/helpers';

@withPredicate
export class TuiLoaderHarness extends HarnessWith<TuiLoaderHarness>() {
    static hostSelector = 'tui-loader';

    private readonly loader = this.locatorForOptional('.loader');

    async isLoading(): Promise<boolean> {
        return !!(await this.loader());
    }

    async getText(): Promise<string> {
        const loader = await this.loader();

        return loader ? loader.text() : '';
    }
}
