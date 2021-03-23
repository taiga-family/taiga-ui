import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {ExampleBrowserComponent} from './browser.component';
import {TuiBrowserExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleBrowserComponent)),
    ],
    declarations: [ExampleBrowserComponent, TuiBrowserExample1],
    exports: [ExampleBrowserComponent],
})
export class ExampleBrowserModule {}
