import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiFocusableItemAccessorComponent} from './focusable-item-accessor.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiFocusableItemAccessorComponent)),
    ],
    declarations: [ExampleTuiFocusableItemAccessorComponent],
    exports: [ExampleTuiFocusableItemAccessorComponent],
})
export class ExampleTuiFocusableItemAccessorModule {}
