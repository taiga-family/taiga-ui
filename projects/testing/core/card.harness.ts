import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiThumbnailCardHarness extends TuiComponentHarness {
    protected static hostSelector = 'tui-thumbnail-card';

    protected async hasPaymentSystemLogo(): Promise<boolean> {
        const tuiSvg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: '.t-payment-system-logo'}),
        )();

        return !!tuiSvg;
    }

    protected async hasBrandLogo(): Promise<boolean> {
        const tuiSvg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: '.t-brand-logo'}),
        )();

        return !!tuiSvg;
    }
}

/**
 * @deprecated use {@link TuiThumbnailCardHarness}
 */
export class TuiCardHarness extends TuiThumbnailCardHarness {
    protected static override hostSelector = 'tui-card';
}
