import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerModule, TuiTextareaModule} from '@taiga-ui/kit';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownContextComponent} from './dropdown-context.component';
import {TuiDropdownContextExample1} from './examples/1';
import {TuiDropdownContextExample2} from './examples/2';
import {TuiDropdownContextExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiDataListModule,
        TuiSvgModule,
        TuiTableModule,
        TuiDataListDropdownManagerModule,
        TuiTextareaModule,
        TuiButtonDirective,
        TuiLinkModule,
        TuiDropdownModule,
        TuiActiveZoneDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownContextComponent)),
        ReactiveFormsModule,
        DropdownDocumentationModule,
    ],
    declarations: [
        ExampleTuiDropdownContextComponent,
        TuiDropdownContextExample1,
        TuiDropdownContextExample2,
        TuiDropdownContextExample3,
    ],
})
export class ExampleTuiDropdownContextModule {}
