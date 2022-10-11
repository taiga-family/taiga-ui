import {InjectionToken} from '@angular/core';

import {TUI_DEFAULT_TREE_CONTROLLER} from '../constants/tree-default-tree-controller';
import type {TuiTreeController} from '../tree.interfaces';

export const TUI_TREE_CONTROLLER = new InjectionToken<TuiTreeController>(
    `[TUI_TREE_CONTROLLER]: Controller for expanding the tree`,
    {
        factory: () => TUI_DEFAULT_TREE_CONTROLLER,
    },
);
