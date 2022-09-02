import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_DEFAULT_TREE_CONTROLLER, TUI_TREE_ITEM_CONTENT} from './tree.constants';
import type {
    TuiTreeAccessor,
    TuiTreeController,
    TuiTreeItemContext,
    TuiTreeLoader,
} from './tree.interfaces';

export const TUI_TREE_ACCESSOR = new InjectionToken<TuiTreeAccessor<unknown>>(
    `Controller for tracking value - TuiTreeItemComponent pairs`,
);

export const TUI_TREE_CONTROLLER = new InjectionToken<TuiTreeController>(
    `Controller for expanding the tree`,
    {
        factory: () => TUI_DEFAULT_TREE_CONTROLLER,
    },
);

export const TUI_TREE_NODE = new InjectionToken(`A node of a tree view`);

export const TUI_TREE_LOADING = new InjectionToken(
    `A tree node placeholder for loading`,
    {factory: () => ({})},
);

export const TUI_TREE_START = new InjectionToken(`A tree node starting point`);

export const TUI_TREE_LOADER = new InjectionToken<TuiTreeLoader<unknown>>(
    `A service to load tree progressively`,
);

export const TUI_TREE_CONTENT = new InjectionToken<
    PolymorpheusContent<TuiTreeItemContext>
>(`Content for a tree item`, {
    factory: () => TUI_TREE_ITEM_CONTENT,
});

export const TUI_TREE_LEVEL = new InjectionToken<number>(
    `Nesting level of current TreeView node`,
    {
        factory: () => -1,
    },
);
