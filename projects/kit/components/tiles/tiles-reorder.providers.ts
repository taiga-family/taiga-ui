import type {FactoryProvider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

import type {TuiReorderFunction} from './helpers/reorder-functions';
import {shift, swap} from './helpers/reorder-functions';

type TuiTilesReorderStrategy = typeof DEFAULT_REORDER_STRATEGY | 'shift';

const DEFAULT_REORDER_STRATEGY = 'swap';

export const TUI_TILES_REORDER_STRATEGY = tuiCreateToken<TuiTilesReorderStrategy>(
    DEFAULT_REORDER_STRATEGY,
);

const reorderBy: Record<TuiTilesReorderStrategy, TuiReorderFunction> = {
    shift,
    swap,
};

export const TUI_REORDER_BY_STRATEGY = tuiCreateToken(
    reorderBy[DEFAULT_REORDER_STRATEGY],
);

export const TuiReorderTilesProvider: FactoryProvider = {
    provide: TUI_REORDER_BY_STRATEGY,
    deps: [TUI_TILES_REORDER_STRATEGY],
    useFactory: (strategy: TuiTilesReorderStrategy) => reorderBy[strategy] ?? swap,
};
