import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives/lazy-loading';

import {TuiLazyLoadingExample1} from './examples/1';
import {ExampleTuiLazyLoadingComponent} from './lazy-loading.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLazyLoadingModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLazyLoadingComponent)),
    ],
    declarations: [ExampleTuiLazyLoadingComponent, TuiLazyLoadingExample1],
    exports: [ExampleTuiLazyLoadingComponent],
})
export class ExampleTuiLazyLoadingModule {}
