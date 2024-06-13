import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';

import {TuiTableBarComponent} from './table-bar.component';
import type {TuiTableBarOptions} from './table-bar.options';
import {TUI_TABLE_BAR_OPTIONS, TUI_TABLE_BARS} from './table-bar.options';

/**
 * @deprecated Use {@link TuiFilterByInputPipe} instead
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
