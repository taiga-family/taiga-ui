import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiBreadcrumbsModule} from '@taiga-ui/kit';
import {ExampleTuiBreadcrumbsComponent} from './breadcrumbs.component';
import {TuiBreadcrumbsExample1} from './examples/1';

@NgModule({
    imports: [
        TuiBreadcrumbsModule,
        TuiLinkModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiBreadcrumbsComponent)),
    ],
    declarations: [ExampleTuiBreadcrumbsComponent, TuiBreadcrumbsExample1],
    exports: [ExampleTuiBreadcrumbsComponent],
})
export class ExampleTuiBreadcrumbsModule {}
