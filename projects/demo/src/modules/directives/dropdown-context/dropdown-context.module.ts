import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiLinkDirective,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerModule} from '@taiga-ui/kit';
import {TuiTextareaModule} from '@taiga-ui/legacy';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownContextComponent} from './dropdown-context.component';
import {TuiDropdownContextExample1} from './examples/1';
import {TuiDropdownContextExample2} from './examples/2';
import {TuiDropdownContextExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        TuiDataList,
        TuiSvgComponent,
        TuiTable,
        TuiDataListDropdownManagerModule,
        TuiTextareaModule,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiDropdownModule,
        TuiActiveZoneDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownContextComponent)),
        ReactiveFormsModule,
        DropdownDocumentationModule,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiDropdownContextComponent,
        TuiDropdownContextExample1,
        TuiDropdownContextExample2,
        TuiDropdownContextExample3,
    ],
})
export class ExampleTuiDropdownContextModule {}
