import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_TREE_ITEM_CONTENT} from '../constants/tree-item-content';
import type {TuiTreeItemContext} from '../tree.interfaces';

export const TUI_TREE_CONTENT = new InjectionToken<
    PolymorpheusContent<TuiTreeItemContext>
>(`[TUI_TREE_CONTENT]: Content for a tree item`, {
    factory: () => TUI_TREE_ITEM_CONTENT,
});
