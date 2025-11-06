import {InjectionToken} from '@angular/core';

import {TUI_DEFAULT_TREE_CONTROLLER} from './tree.constants';
import {type TuiTreeAccessor, type TuiTreeLoader} from './tree.interfaces';

/**
 * Controller for tracking value - TuiTreeItemComponent pairs
 */
export const TUI_TREE_ACCESSOR = new InjectionToken<TuiTreeAccessor<unknown>>(
    ngDevMode ? 'TUI_TREE_ACCESSOR' : '',
);

/**
 * Controller for expanding the tree
 */
export const TUI_TREE_CONTROLLER = new InjectionToken(
    ngDevMode ? 'TUI_TREE_CONTROLLER' : '',
    {
        factory: () => TUI_DEFAULT_TREE_CONTROLLER,
    },
);

/**
 * A node of a tree view
 */
export const TUI_TREE_NODE = new InjectionToken(ngDevMode ? 'TUI_TREE_NODE' : '');

/**
 * A tree node placeholder for loading
 */
export const TUI_TREE_LOADING = new InjectionToken(ngDevMode ? 'TUI_TREE_LOADING' : '', {
    factory: () => ({}),
});

/**
 * A tree node starting point
 */
export const TUI_TREE_START = new InjectionToken(ngDevMode ? 'TUI_TREE_START' : '');

/**
 * A service to load tree progressively
 */
export const TUI_TREE_LOADER = new InjectionToken<TuiTreeLoader<unknown>>(
    ngDevMode ? 'TUI_TREE_LOADER' : '',
);

/**
 * Nesting level of current TreeView node
 */
export const TUI_TREE_LEVEL = new InjectionToken(ngDevMode ? 'TUI_TREE_LEVEL' : '', {
    factory: () => -1,
});
