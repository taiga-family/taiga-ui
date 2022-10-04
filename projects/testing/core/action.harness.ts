import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiMarkerIconHarness} from './marker-icon.harness';

export class TuiActionHarness extends TuiComponentHarness {
    static hostSelector = `button[tuiAction], a[tuiAction]`;

    protected getIconHarness = this.locatorForOptional(TuiMarkerIconHarness);

    async icon(): Promise<TuiMarkerIconHarness | null> {
        return this.getIconHarness();
    }
}
