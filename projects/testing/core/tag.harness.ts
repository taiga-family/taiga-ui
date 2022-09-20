import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiSvgHarness} from './svg.harness';

export class TuiTagHarness extends TuiComponentHarness {
    static hostSelector = `tui-tag`;

    async hasCrossIcon(): Promise<boolean> {
        const svg = await this.locatorForOptional(
            TuiSvgHarness.with({selector: `.t-icon`}),
        )();

        return !!svg;
    }
}
