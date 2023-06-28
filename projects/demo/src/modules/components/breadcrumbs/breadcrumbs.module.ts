import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
} from '@taiga-ui/core';
import {TuiBreadcrumbsModule, TuiInputNumberModule} from '@taiga-ui/kit';

import {ExampleTuiBreadcrumbsComponent} from './breadcrumbs.component';
import {TuiBreadcrumbsExample1} from './examples/1';
import {TuiBreadcrumbsExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
        TuiAddonDocModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiInputNumberModule,
        TuiRepeatTimesModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBreadcrumbsComponent)),
    ],
    declarations: [
        ExampleTuiBreadcrumbsComponent,
        TuiBreadcrumbsExample1,
        TuiBreadcrumbsExample2,
    ],
    exports: [ExampleTuiBreadcrumbsComponent],
})
export class ExampleTuiBreadcrumbsModule {}
