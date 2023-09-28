import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiSwipeableModule} from '@taiga-ui/experimental';

import {TuiSwipeableExample1} from './examples/1';
import {ExampleTuiSwipeableComponent} from './swipeable.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSwipeableModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSwipeableComponent)),
    ],
    declarations: [ExampleTuiSwipeableComponent, TuiSwipeableExample1],
    exports: [ExampleTuiSwipeableComponent],
})
export class ExampleTuiSwipeableModule {}
