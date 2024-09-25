import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TUI_DEFAULT_TREE_CONTROLLER, TUI_TREE_ITEM_CONTENT} from './tree.constants';
import type {TuiTreeAccessor, TuiTreeItemContext, TuiTreeLoader} from './tree.interfaces';

/**
 * Controller for tracking value - TuiTreeItemComponent pairs
 */
export const TUI_TREE_ACCESSOR = tuiCreateToken<TuiTreeAccessor<unknown>>();

/**
 * Controller for expanding the tree
 */
export const TUI_TREE_CONTROLLER = tuiCreateToken(TUI_DEFAULT_TREE_CONTROLLER);

/**
 * A node of a tree view
 */
export const TUI_TREE_NODE = tuiCreateToken();

/**
 * A tree node placeholder for loading
 */
export const TUI_TREE_LOADING = tuiCreateToken({});

/**
 * A tree node starting point
 */
export const TUI_TREE_START = tuiCreateToken();

/**
 * A service to load tree progressively
 */
export const TUI_TREE_LOADER = tuiCreateToken<TuiTreeLoader<unknown>>();

/**
 * Content for a tree item
 */
export const TUI_TREE_CONTENT =
    tuiCreateToken<PolymorpheusContent<TuiTreeItemContext>>(TUI_TREE_ITEM_CONTENT);

/**
 * Nesting level of current TreeView node
 */
export const TUI_TREE_LEVEL = tuiCreateToken(-1);
