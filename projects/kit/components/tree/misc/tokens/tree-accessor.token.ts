import {InjectionToken} from '@angular/core';

import type {TuiTreeAccessor} from '../tree.interfaces';

export const TUI_TREE_ACCESSOR = new InjectionToken<TuiTreeAccessor<unknown>>(
    `[TUI_TREE_ACCESSOR]: Controller for tracking value - TuiTreeItemComponent pairs`,
);
