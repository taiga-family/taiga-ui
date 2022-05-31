import {tuiHarnessWith, tuiWithPredicate} from '@taiga-ui/testing/utils';

import {TuiLoaderHarness} from '../loader/loader.harness';

@tuiWithPredicate
export class TuiButtonHarness extends tuiHarnessWith<TuiButtonHarness>('[tuiButton]') {
    private readonly loader = this.locatorForOptional(TuiLoaderHarness);

    async isLoading(): Promise<boolean> {
        return !!(await this.loader());
    }
}
