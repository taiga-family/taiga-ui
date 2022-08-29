import {tuiHarnessWith, tuiWithPredicate} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from '../svg/svg.harness';

@tuiWithPredicate
export class TuiCardHarness extends tuiHarnessWith<TuiCardHarness>(`tui-card`) {
    async hasPaymentSystemLogo(): Promise<boolean> {
        const tuiSvg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: `.t-payment-system-logo`}),
        )();

        return !!tuiSvg;
    }

    async hasBrandLogo(): Promise<boolean> {
        const tuiSvg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: `.t-brand-logo`}),
        )();

        return !!tuiSvg;
    }
}
