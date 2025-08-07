import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk/services';

import {TuiTableBarComponent} from './table-bar.component';
import {
    TUI_TABLE_BAR_OPTIONS,
    TUI_TABLE_BARS,
    type TuiTableBarOptions,
} from './table-bar.options';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiTableBarsService(
            TUI_TABLE_BARS,
            TuiTableBarComponent,
            inject(TUI_TABLE_BAR_OPTIONS),
        ),
})
export class TuiTableBarsService extends TuiPopoverService<TuiTableBarOptions> {}
