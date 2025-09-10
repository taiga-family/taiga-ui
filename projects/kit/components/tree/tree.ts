import {TuiTreeComponent} from './components/tree/tree.component';
import {TuiTreeItem} from './components/tree-item/tree-item.component';
import {TuiTreeItemContent} from './components/tree-item-content/tree-item-content.component';
import {TuiTreeItemEmpty} from './components/tree-item-empty/tree-item-empty.component';
import {TuiTreeChildren} from './directives/tree-children.directive';
import {TuiTreeControllerDirective} from './directives/tree-controller.directive';
import {TuiTreeItemController} from './directives/tree-item-controller.directive';
import {TuiTreeNode} from './directives/tree-node.directive';

export const TuiTree = [
    TuiTreeComponent,
    TuiTreeItem,
    TuiTreeItemContent,
    TuiTreeChildren,
    TuiTreeItemController,
    TuiTreeControllerDirective,
    TuiTreeNode,
    TuiTreeItemEmpty,
] as const;
