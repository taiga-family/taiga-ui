import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

import type {TuiReorderFunction} from './helpers/reorder-functions';
import {tuiTileSwap} from './helpers/reorder-functions';

export const TUI_TILE_REORDER = tuiCreateToken<TuiReorderFunction>(tuiTileSwap);
