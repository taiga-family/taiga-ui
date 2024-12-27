import type {FactoryProvider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

import type {TuiReorderFunction} from './helpers/reorder-functions';
import {shift, swap} from './helpers/reorder-functions';

type TuiReorderStrategy = typeof DEFAULT_REORDER_STRATEGY | 'shift';

const DEFAULT_REORDER_STRATEGY = 'swap';

export const TUI_TILES_REORDER_STRATEGY = tuiCreateToken<TuiReorderStrategy>(
    DEFAULT_REORDER_STRATEGY,
);

const reorderBy: Record<TuiReorderStrategy, TuiReorderFunction> = {
    shift,
    swap,
};

export const TUI_REORDER_BY_STRATEGY = tuiCreateToken(
    reorderBy[DEFAULT_REORDER_STRATEGY],
);

export const TuiTilesReorderProvider: FactoryProvider = {
    provide: TUI_REORDER_BY_STRATEGY,
    deps: [TUI_TILES_REORDER_STRATEGY],
    useFactory: (strategy: TuiReorderStrategy) =>
        reorderBy[strategy] ?? reorderBy[DEFAULT_REORDER_STRATEGY],
};
