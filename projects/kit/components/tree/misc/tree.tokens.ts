import {InjectionToken} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_DEFAULT_TREE_CONTROLLER, TUI_TREE_ITEM_CONTENT} from './tree.constants';
import type {TuiTreeAccessor, TuiTreeItemContext, TuiTreeLoader} from './tree.interfaces';

/**
 * Controller for tracking value - TuiTreeItemComponent pairs
 */
export const TUI_TREE_ACCESSOR = new InjectionToken<TuiTreeAccessor<unknown>>(
    '[TUI_TREE_ACCESSOR]',
);

/**
 * Controller for expanding the tree
 */
export const TUI_TREE_CONTROLLER = tuiCreateToken(TUI_DEFAULT_TREE_CONTROLLER);

/**
 * A node of a tree view
 */
export const TUI_TREE_NODE = new InjectionToken('[TUI_TREE_NODE]');

/**
 * A tree node placeholder for loading
 */
export const TUI_TREE_LOADING = tuiCreateToken({});

/**
 * A tree node starting point
 */
export const TUI_TREE_START = new InjectionToken('[TUI_TREE_START]');

/**
 * A service to load tree progressively
 */
export const TUI_TREE_LOADER = new InjectionToken<TuiTreeLoader<unknown>>(
    '[TUI_TREE_LOADER]',
);

/**
 * Content for a tree item
 */
export const TUI_TREE_CONTENT =
    tuiCreateToken<PolymorpheusContent<TuiTreeItemContext>>(TUI_TREE_ITEM_CONTENT);

/**
 * Nesting level of current TreeView node
 */
export const TUI_TREE_LEVEL = tuiCreateToken(-1);
