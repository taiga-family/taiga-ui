import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives/lazy-loading';
import {TuiLazyLoadingExample1} from './examples/1';
import {ExampleTuiLazyLoadingComponent} from './lazy-loading.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLazyLoadingModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiLazyLoadingComponent)),
    ],
    declarations: [ExampleTuiLazyLoadingComponent, TuiLazyLoadingExample1],
    exports: [ExampleTuiLazyLoadingComponent],
})
export class ExampleTuiLazyLoadingModule {}
