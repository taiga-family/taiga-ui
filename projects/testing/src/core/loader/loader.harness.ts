import {HarnessWith, withPredicate} from '../../utils/helpers';

@withPredicate
export class TuiLoaderHarness extends HarnessWith<TuiLoaderHarness>('tui-loader') {
    private readonly loader = this.locatorForOptional('fieldset.t-content + .t-loader');

    async isLoading(): Promise<boolean> {
        return !!(await this.loader());
    }

    async getText(): Promise<string> {
        const loader = await this.loader();

        return loader?.text() ?? '';
    }
}
