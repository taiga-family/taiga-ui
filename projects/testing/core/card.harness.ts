import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiCardHarness extends TuiComponentHarness {
    static hostSelector = `tui-card`;

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
