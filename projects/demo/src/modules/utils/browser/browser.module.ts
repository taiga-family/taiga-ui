import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {ExampleBrowserComponent} from './browser.component';
import {TuiBrowserExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleBrowserComponent)),
    ],
    declarations: [ExampleBrowserComponent, TuiBrowserExample1],
    exports: [ExampleBrowserComponent],
})
export class ExampleBrowserModule {}
