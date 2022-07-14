import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiDropdownContextModule, TuiTextAreaModule} from '@taiga-ui/kit';

import {DropdownControllerDocumentationModule} from '../../components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.module';
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
        TuiDropdownContextModule,
        TuiTextAreaModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiDropdownModule,
        TuiActiveZoneModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownContextComponent)),
        ReactiveFormsModule,
        DropdownControllerDocumentationModule,
    ],
    declarations: [
        ExampleTuiDropdownContextComponent,
        TuiDropdownContextExample1,
        TuiDropdownContextExample2,
        TuiDropdownContextExample3,
    ],
})
export class ExampleTuiDropdownContextModule {}
