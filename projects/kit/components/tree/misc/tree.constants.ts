import {ALWAYS_TRUE_HANDLER, EMPTY_FUNCTION} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiTreeItemContentComponent} from '../components/tree-item-content/tree-item-content.component';
import type {TuiTreeController} from './tree.interfaces';

export const TUI_TREE_ITEM_CONTENT = new PolymorpheusComponent(
    TuiTreeItemContentComponent,
);

export const TUI_DEFAULT_TREE_CONTROLLER: TuiTreeController = {
    isExpanded: ALWAYS_TRUE_HANDLER,
    toggle: EMPTY_FUNCTION as () => void,
};
