import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleBrowserComponent} from './browser.component';
import {TuiBrowserExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleBrowserComponent)),
    ],
    declarations: [ExampleBrowserComponent, TuiBrowserExample1],
    exports: [ExampleBrowserComponent],
})
export class ExampleBrowserModule {}
