import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTreeComponent} from './components/tree/tree.component';
import {TuiTreeItem} from './components/tree-item/tree-item.component';
import {TuiTreeItemContent} from './components/tree-item-content/tree-item-content.component';
import {TuiTreeChildren} from './directives/tree-children.directive';
import {TuiTreeControllerImpl} from './directives/tree-controller.directive';
import {TuiTreeItemController} from './directives/tree-item-controller.directive';
import {TuiTreeNode} from './directives/tree-node.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiExpand,
        TuiLet,
        TuiButton,
    ],
    declarations: [
        TuiTreeComponent,
        TuiTreeItem,
        TuiTreeItemContent,
        TuiTreeChildren,
        TuiTreeItemController,
        TuiTreeControllerImpl,
        TuiTreeNode,
    ],
    exports: [
        TuiTreeComponent,
        TuiTreeItem,
        TuiTreeChildren,
        TuiTreeItemController,
        TuiTreeControllerImpl,
    ],
})
export class TuiTree {}
