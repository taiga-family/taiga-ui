import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiThumbnailCardHarness extends TuiComponentHarness {
    static hostSelector = `tui-thumbnail-card`;

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

/**
 * @deprecated use {@link TuiThumbnailCardHarness}
 */
export class TuiCardHarness extends TuiThumbnailCardHarness {
    static override hostSelector = `tui-card`;
}
