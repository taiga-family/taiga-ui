import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiSwipeModule} from '@taiga-ui/cdk';
import {TuiSwipeExample1} from './examples/1';
import {ExampleTuiSwipeComponent} from './swipe.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSwipeModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSwipeComponent)),
    ],
    declarations: [ExampleTuiSwipeComponent, TuiSwipeExample1],
    exports: [ExampleTuiSwipeComponent],
})
export class ExampleTuiSwipeModule {}
