import {InjectionToken} from '@angular/core';

import type {TuiTreeLoader} from '../tree.interfaces';

export const TUI_TREE_LOADER = new InjectionToken<TuiTreeLoader<unknown>>(
    `[TUI_TREE_LOADER]: A service to load tree progressively`,
);
