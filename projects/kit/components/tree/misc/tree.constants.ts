import {EMPTY_FUNCTION, TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiTreeItemContentComponent} from '../components/tree-item-content/tree-item-content.component';
import type {TuiTreeController} from './tree.interfaces';

export const TUI_TREE_ITEM_CONTENT = new PolymorpheusComponent(
    TuiTreeItemContentComponent,
);

export const TUI_DEFAULT_TREE_CONTROLLER: TuiTreeController = {
    isExpanded: TUI_TRUE_HANDLER,
    toggle: EMPTY_FUNCTION as () => void,
};
