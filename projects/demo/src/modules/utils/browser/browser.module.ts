import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleBrowserComponent} from './browser.component';
import {TuiBrowserExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleBrowserComponent)),
    ],
    declarations: [ExampleBrowserComponent, TuiBrowserExample1],
    exports: [ExampleBrowserComponent],
})
export class ExampleBrowserModule {}
