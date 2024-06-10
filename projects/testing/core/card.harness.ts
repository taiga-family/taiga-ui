import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiThumbnailCardHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-thumbnail-card';

    public async hasPaymentSystemLogo(): Promise<boolean> {
        const tuiSvg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: '.t-payment-system-logo'}),
        )();

        return !!tuiSvg;
    }

    public async hasBrandLogo(): Promise<boolean> {
        const tuiSvg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: '.t-brand-logo'}),
        )();

        return !!tuiSvg;
    }
}
