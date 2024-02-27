import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiMarkerIconHarness} from './marker-icon.harness';

export class TuiActionHarness extends TuiComponentHarness {
    public static hostSelector = 'button[tuiAction], a[tuiAction]';

    public getIconHarness = this.locatorForOptional(TuiMarkerIconHarness);

    public async icon(): Promise<TuiMarkerIconHarness | null> {
        return this.getIconHarness();
    }
}
