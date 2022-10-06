import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiExpandModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTreeComponent} from './components/tree/tree.component';
import {TuiTreeItemComponent} from './components/tree-item/tree-item.component';
import {TuiTreeItemContentComponent} from './components/tree-item-content/tree-item-content.component';
import {TuiTreeChildrenDirective} from './directives/tree-children.directive';
import {TuiTreeControllerDirective} from './directives/tree-controller.directive';
import {TuiTreeItemControllerDirective} from './directives/tree-item-controller.directive';
import {TuiTreeNodeDirective} from './directives/tree-node.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiExpandModule,
        TuiLetModule,
        TuiButtonModule,
    ],
    declarations: [
        TuiTreeComponent,
        TuiTreeItemComponent,
        TuiTreeItemContentComponent,
        TuiTreeChildrenDirective,
        TuiTreeItemControllerDirective,
        TuiTreeControllerDirective,
        TuiTreeNodeDirective,
    ],
    exports: [
        TuiTreeComponent,
        TuiTreeItemComponent,
        TuiTreeChildrenDirective,
        TuiTreeItemControllerDirective,
        TuiTreeControllerDirective,
    ],
})
export class TuiTreeModule {}
