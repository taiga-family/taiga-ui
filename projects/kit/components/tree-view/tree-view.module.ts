import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExpandModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiTreeViewComponent} from './tree-view.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiExpandModule],
    declarations: [TuiTreeViewComponent],
    exports: [TuiTreeViewComponent],
})
export class TuiTreeViewModule {}
