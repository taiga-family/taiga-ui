import type {TuiCellOptions as TuiCellOptionsCore} from '@taiga-ui/core/components/cell';
import {
    TUI_CELL_OPTIONS as TUI_CELL_OPTIONS_CORE,
    tuiCellOptionsProvider as tuiCellOptionsProviderCore,
} from '@taiga-ui/core/components/cell';

/**
 * @deprecated: use TuiCellOptions from @taiga-ui/core
 */
export type TuiCellOptions = TuiCellOptionsCore;

/**
 * @deprecated: use TUI_CELL_OPTIONS from @taiga-ui/core
 */
export const TUI_CELL_OPTIONS = TUI_CELL_OPTIONS_CORE;

/**
 * @deprecated: use tuiCellOptionsProvider from @taiga-ui/core
 */
export const tuiCellOptionsProvider = tuiCellOptionsProviderCore;
